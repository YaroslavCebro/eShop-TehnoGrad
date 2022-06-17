const {Intend, ListIntend, Employee} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');
var Sequelize = require('sequelize');

const e = require('express');

class IntendController {
    async create(req, res){
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        
        var date = new Date()
        const endDate =  date.addDays(3);
        const {userId} = req.body;
        let employee = await Employee.findOne(
            {where: {post: "manager"},
            order: [ [Sequelize.literal('random()')]],
            attributes:['id'],
        })
        let employeeId;
        if (employee !== null) {
            employeeId = employee.id;
        }
        const {conditional} = req.body;
        const intend =  await Intend.create({startDate: Sequelize.literal('CURRENT_TIMESTAMP'), endDate, userId, employeeId, conditional});
        return res.json(intend);
    }
    async getAll(req, res){
        const company = await Intend.findAll();
        return res.json(company);
    }
    async getOne(req, res){
        const {id} = req.params;
        const company = await Intend.findOne({where:{id}})
        return res.json(company);
    }
    async delete(req, res){
        const {id} = req.body;
        const destroed = await Intend.destroy({ where: {id}});
        return res.json(destroed);
    }

}

module.exports = new IntendController();