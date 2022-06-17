const Router = require('express');
const router = new Router();
const ListIntendController = require('../controllers/listIntendController');

router.get('/', ListIntendController.getAll);
router.delete('/', ListIntendController.delete);
router.post('/', ListIntendController.create);
router.get('/:id', ListIntendController.getOne);



module.exports = router;