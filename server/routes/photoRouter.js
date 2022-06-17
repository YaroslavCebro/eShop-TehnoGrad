const Router = require('express');
const router = new Router();
const photoController = require('../controllers/photoController.js');


router.delete('/delete',photoController.delete);
router.post('/',photoController.create);
router.get('/',photoController.getAll);

router.get('/:productId',photoController.getByProdId);
router.get('/:id',photoController.getOne);

module.exports = router;