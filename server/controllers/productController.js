const {Product, Photo, Category, Company} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');
const uuid = require('uuid');
const path = require('path');

class ProductController {
    async create(req, res, next){
        try{
            const {name} = req.body;
            const {price} = req.body;
            const {weight} = req.body;
            const {count} = req.body;
            const {warranty} = req.body;
            const {title} = req.body;
            const {description} = req.body;
            const {img} = req.files
            const {categoryId} = req.body;
            const {companyId} = req.body;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const product =  await Product.create(
                {name, price, weight, count, warranty, title, description, img: fileName, categoryId, companyId});
            return res.json(product);
        } catch(e){
            next(ApiError.badRequest(e.message));
        }   
    }
    
    async getAll(req, res){
        let {categoryId, companyId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;

        let offset = page * limit - limit;
        let product;
        
        if(!categoryId && !companyId){
            product = await Product.findAndCountAll({limit, offset});
        } else if(!categoryId && companyId){
            product = await Product.findAndCountAll({where:{companyId}, limit, offset});
        } else if(categoryId && !companyId){
            product = await Product.findAndCountAll({where:{categoryId}, limit, offset});
        } else if(categoryId && companyId){
            product = await Product.findAndCountAll({where:{categoryId, companyId}, limit, offset});
        }
        return res.json(product);
    }


    async getOne(req, res) {
        const {id} = req.params
        const device = await Product.findOne(
            {
                where: {id},
                include:[{model: Photo,
                    as: 'photos',
                    required: true,
                    attributes:['name'],
                }],
                
            })
        return res.json(device)
    }
 
    async getOneTest(req, res) {
        const {id} = req.params
        const device = await Product.findOne({where: {id}})
        return res.json(device)
    }


    async getFullyProduct(req, res) {
        const {id} = req.params;
        const device = await Product.findOne(
            {
                where: {id},
                include:[
                    {
                    model: Category,
                    as: 'category',
                    required: true,
                    attributes:['name']
                        },{
                    model: Company,
                    as: 'company',
                    required: true,
                    attributes:['name']
                        },{
                    model: Photo,
                    as: 'photos',
                    required: true,
                    attributes:['name'],
                    }
                    ],
            }
        )
        return res.json(device)
    }




    async getAllWithCatAndComp(req, res) {
        const device = await Product.findAll(
            {
                include:[
                    {
                    model: Category,
                    as: 'category',
                    required: true,
                    attributes:['name']
                        },{
                    model: Company,
                    as: 'company',
                    required: true,
                    attributes:['name']
                    }],
            }
        )
        return res.json(device)
    }


    async update(req, res){
        const {id} = req.body;
        const {name} = req.body;
        const {price} = req.body;
        const {weight} = req.body;
        const {count} = req.body;
        const {warranty} = req.body;
        const {title} = req.body;
        const {description} = req.body;
        const {categoryId} = req.body;
        const {companyId} = req.body;
        const updated =  await Product.update(
            {name, price, weight, count, warranty, title, description, categoryId, companyId}, { where: {id}});
        return res.json(updated)
    }
    async delete(req, res){
        const {id} = req.body;
        const destroed = await Product.destroy({ where: {id}});
        return res.json(destroed);
    }

}

module.exports = new ProductController();
