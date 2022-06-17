const {Supplier} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');

class SupplierController {
    async create(req, res){
        const {name} = req.body;
        const {phone} = req.body;
        const {mail} = req.body;
        const supplier =  await Supplier.create({name, phone, mail});
        return res.json(supplier);
    }
    async getAll(req, res){
        const supplier = await Supplier.findAll();
        return res.json(supplier);
    }
    async getOne(req, res){
        const {id} = req.params;
        const supplier = await Supplier.findOne({where:{id}})
        return res.json(supplier);
    }
    async update(req, res){
        const {id} = req.body;
        const {name} = req.body;
        const {phone} = req.body;
        const {mail} = req.body;
        const updated = await Supplier.update({name, phone, mail}, { where: {id}});
        return res.json(updated)
    }
    async delete(req, res){
        const {id} = req.body;
        const destroed = await Supplier.destroy({ where: {id}});
        return res.json(destroed);
    }

}

module.exports = new SupplierController();