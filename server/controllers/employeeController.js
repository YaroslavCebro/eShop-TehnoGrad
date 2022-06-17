const {Employee} = require('../models/models.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError.js');


const generateJwt = (id, lname, name, post) => {
    return jwt.sign(
        {id,lname,name,post},
        process.env.SECRET_KEY,
        {expiresIn: "24h"});
}

class EmployeeController {

    async getAll(req, res){
        const employees = await Employee.findAll();
        return res.json(employees);
    }
    async registration(req, res, next){
        const {lname,
            name,
            phone,
            post,
            password,} = req.body;
        if( !password || !name || !lname || !phone || !post){
            return next(ApiError.badRequest('Uncorrenct data'));
        }
        const candidate = await Employee.findOne({where: {name}});
        if(candidate){
            return next(ApiError.badRequest('User with this email already exist'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const employee = await Employee.create({lname, phone, post, name, password: hashPassword});
        const token = generateJwt(employee.id, lname, name, phone, post)
        return res.json({token});
    }
    async login(req, res, next){
        const {lname, name, phone, password} = req.body;
        const employee = await Employee.findOne({where: {lname, name, phone}})
        if(!employee){
            return next(ApiError.internal("employee not exist"))
        }
        const comparePass = bcrypt.compareSync(password, employee.password);
        if(!comparePass){
            return next(ApiError.internal("Wrong password"))
        }
        const token = generateJwt(employee.id, employee.lname, employee.name, employee.phone, employee.post)
        return res.json({token});
    }
    async check(req, res, next){
        const token = generateJwt(req.employee.id, req.employee.lname, req.employee.name, req.employee.phone, req.employee.post)
        return res.json({token});
    }


    async update(req, res){
        const {id} = req.body;
        const {name} = req.body;
        const {phone} = req.body;
        const updated = await Users.update({name, phone, mail}, { where: {id}});
        return res.json(updated)
    }
    async delete(req, res){
        const {id} = req.body;
        const destroed = await Users.destroy({ where: {id}});
        return res.json(destroed);
    }

}

module.exports = new EmployeeController();