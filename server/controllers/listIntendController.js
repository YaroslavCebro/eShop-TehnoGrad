const {ListIntend, Intend, Employee, Product} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');

class ListIntendController{
    async create(req, res){
        const {count} = req.body;
        const {productId} = req.body;
        const {intendId} = req.body;
        const listIntend =  await ListIntend.create({count, productId, intendId});
        return res.json(listIntend);
    }
    async getAll(req, res){
        const listIntend = await Intend.findAll({
                where: {userId: 15},
                include:[{model: ListIntend,
                    as: 'listIntends',
                    required: true,
                    include: [{model: Product,
                        as: 'product',
                        required: true,
                        attributes:['id','name', 'price', 'warranty', 'img'],
                    }]},{
                    model: Employee,
                    as: 'employee',
                    required: true,
                    
                }],
                
    })
        return res.json(listIntend);
    }
    async getOne(req, res){
        const {id} = req.params;
        const listIntend = await ListIntend.findOne({where:{id}})
        return res.json(listIntend);
    }
    async delete(req, res){
        const {id} = req.body;
        const listIntend = await ListIntend.destroy({ where: {id}});
        return res.json(listIntend);
    }

}

module.exports = new ListIntendController();