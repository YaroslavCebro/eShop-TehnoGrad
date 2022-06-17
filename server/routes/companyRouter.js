const Router = require('express');
const router = new Router();
const CompanyController = require('../controllers/companyController');

router.post('/update',CompanyController.update);
router.delete('/delete',CompanyController.delete);
router.post('/',CompanyController.create);
router.get('/',CompanyController.getAll);
router.get('/:id',CompanyController.getOne);


module.exports = router;