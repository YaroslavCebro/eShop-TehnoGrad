const {Category} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');

class CategoryController {
    async create(req, res) {
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }
    async getOne(req, res) {
        const {id} = req.body
        const category = await Category.findAll({ where: {id}})
        return res.json(category)
    }

    async getAll(req, res){
        const category = await Category.findAll();
        return res.json(category);
    }
    async update(req, res){
        const {id} = req.body;
        const {name} = req.body;
        const updated = await Category.update({name}, { where: {id}});
        return res.json(updated)
    }
    async delete(req, res){
        const {id} = req.body;
        console.log(id)
        const destroed = await Category.destroy({ where: {id}});
        return res.json(destroed)
    }
}

module.exports = new CategoryController();