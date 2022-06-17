const Router = require('express');
const router = new Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');



router.post('/registration', employeeController.registration);
router.post('/login', employeeController.login);
router.get('/auth', authMiddleware,  employeeController.check);
router.get('/', employeeController.getAll);


module.exports = router;