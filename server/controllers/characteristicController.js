const {Characteristic} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');

class CharacteristicController {
    async create(req, res) {
        const {name} = req.body
        const category = await Characteristic.create({name})
        return res.json(category)
    }
    async getOne(req, res) {
        const {id} = req.body
        const category = await Characteristic.findAll({ where: {id}})
        return res.json(category)
    }

    async getAll(req, res){
        const category = await Characteristic.findAll();
        return res.json(category);
    }
    async update(req, res){
        const {id} = req.body;
        const {name} = req.body;
        const updated = await Characteristic.update({name}, { where: {id}});
        return res.json(updated)
    }
    async delete(req, res){
        const {id} = req.body;
        const destroed = await Characteristic.destroy({ where: {id}});
        return res.json(destroed)
    }
}

module.exports = new CharacteristicController();