const {Company} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');

class CompanyController {
    async create(req, res){
        const {name} = req.body;
        const {country} = req.body;
        const company =  await Company.create({name, country});
        return res.json(company);
    }
    async getAll(req, res){
        const company = await Company.findAll();
        return res.json(company);
    }
    async getOne(req, res){
        const {id} = req.params;
        const company = await Company.findOne({where:{id}})
        return res.json(company);
    }
    async update(req, res){
        const {id} = req.body;
        const {name} = req.body;
        const {country} = req.body;
        const updated = await Company.update({name,country}, { where: {id}});
        return res.json(updated)
    }
    async delete(req, res){
        const {id} = req.body;
        const destroed = await Company.destroy({ where: {id}});
        return res.json(destroed);
    }

}

module.exports = new CompanyController();