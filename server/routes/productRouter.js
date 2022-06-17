const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');

router.post('/update',productController.update);
router.delete('/delete',productController.delete);
router.post('/',productController.create);
router.get('/',productController.getAll);
router.get('/getall',productController.getAllWithCatAndComp);
router.get('/getfull/:id',productController.getFullyProduct);
router.get('/:id',productController.getOne);
router.get('/test/:id',productController.getOneTest);


module.exports = router;