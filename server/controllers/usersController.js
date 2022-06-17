const {Users, Intend} = require('../models/models.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError.js');


const generateJwt = (id, mail) => {
    return jwt.sign(
        {id,mail},
        process.env.SECRET_KEY,
        {expiresIn: "24h"});
}

class UsersController {
    async getAll(req, res){
        const users = await Users.findAll();
        return res.json(users);
    }
    async registration(req, res, next){
        const {
            lname, name,
            mail,
            password} = req.body;
        if(!mail || !password || !name || !lname){
            return next(ApiError.badRequest('Uncorrect data'));
        }
        const candidate = await Users.findOne({where: {mail}});
        if(candidate){
            return next(ApiError.badRequest('User with this mail already exist'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await Users.create({lname, name, mail, password: hashPassword});
        const token = generateJwt(user.id, mail);
        return res.json({token});
    }
    async login(req, res, next){
        const {mail, password} = req.body;
        const user = await Users.findOne({where: {mail}})
        if(!user){
            return next(ApiError.internal("User not exist"))
        }
        const comparePass = bcrypt.compareSync(password, user.password);
        if(!comparePass){
            return next(ApiError.internal("Wrong password"))
        }
        const token = generateJwt(user.id, mail)
        return res.json({token});
    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.mail);
        return res.json({token});
    }


    async update(req, res){
        const {id} = req.body;
        // var {id, mail}  = jwt.verify(token, process.env.SECRET_KEY);

        const {lname} = req.body;
        const {name} = req.body;
        const updated = await Users.update({lname, name,}, { where: {id}});
        // const user = await  Users.findOne({where: {id}})
        return res.json(updated)
    }
    
    async getUserInfo(req, res){
        const {token} = req.body;
        var {id, mail}  = jwt.verify(token, process.env.SECRET_KEY);
        const user = await  Users.findOne({where: {id}})
        return res.json(user)
    }
    async delete(req, res){
        const {id} = req.body;
        const destroed = await Users.destroy({ where: {id}});
        return res.json(destroed);
    }
    async getById(req, res){
        // const {id} = req.body;
        const user = await  Users.findOne({where: {id: 15}})
        return res.json(user);
    }

}

module.exports = new UsersController();