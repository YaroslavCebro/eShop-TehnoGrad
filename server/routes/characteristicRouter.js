const Router = require('express');
const router = new Router();
const CharacteristicController = require('../controllers/characteristicController');

router.post('/:id', CharacteristicController.update);
router.delete('/', CharacteristicController.delete);
router.post('/', CharacteristicController.create);
router.get('/', CharacteristicController.getAll);
router.get('/:id', CharacteristicController.getOne);

module.exports = router;