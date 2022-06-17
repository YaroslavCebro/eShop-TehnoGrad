const Router = require('express');
const router = new Router();
const UsersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/registration', UsersController.registration);
router.post('/login', UsersController.login);
router.get('/auth', authMiddleware,  UsersController.check);
router.delete('/delete', UsersController.delete);
router.post('/update', UsersController.update);
router.get('/', UsersController.getAll);
router.get('/info', UsersController.getUserInfo);
router.get('/byid', UsersController.getById);
router.get('/getall', UsersController.getAll);

module.exports = router;