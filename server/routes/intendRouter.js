const Router = require('express');
const router = new Router();
const IntendController = require('../controllers/intendController');

router.get('/', IntendController.getAll);
router.delete('/', IntendController.delete);
router.post('/', IntendController.create);
router.get('/:id', IntendController.getOne);



module.exports = router;