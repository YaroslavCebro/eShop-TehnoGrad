const Router = require('express');
const router = new Router();
const supplierController = require('../controllers/supplierController.js');

router.post('/update',supplierController.update);
router.delete('/delete',supplierController.delete);
router.post('/',supplierController.create);
router.get('/',supplierController.getAll);
router.get('/:id',supplierController.getOne);


module.exports = router;