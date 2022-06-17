const {Photo} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');
const uuid = require('uuid');
const path = require('path');

class PhotoController {
    async create(req, res){
        const {name} = req.files;
        let {productId} = req.body;
        let fileName = uuid.v4() + ".jpg";
        name.mv(path.resolve(__dirname, '..', 'static', fileName));
        const photo =  await Photo.create({name: fileName, productId});
        return res.json(photo);
    }
    async getAll(req, res){
        const photo = await Photo.findAll();
        return res.json(photo);
    }
    async getOne(req, res){
        const {id} = req.params;
        const photo = await Photo.findOne({where:{id}})
        return res.json(photo);
    }
    async getByProdId(req, res){
        const {productId} = req.params;
        const photo = await Photo.findAll({where:{productId}})
        return res.json(photo);
    }
    async delete(req, res){
        const {id} = req.body;
        const destroed = await Photo.destroy({ where: {id}});
        return res.json(destroed);
    }

}

module.exports = new PhotoController();