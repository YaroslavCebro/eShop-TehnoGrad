const Router = require('express');
const router = new Router();

const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
const companyRouter = require('./companyRouter');
const usersRouter = require('./usersRouter');
const supplierRouter = require('./supplierRouter');
const photoRouter = require('./photoRouter');
const employeeRouter = require('./employeeRouter');
const intendRouter = require('./intendRouter');
const listIntendRouter = require('./listIntendRouter');
const characteristicRouter = require('./characteristicRouter');


router.use('/category', categoryRouter);
router.use('/photo', photoRouter);
router.use('/supplier', supplierRouter);
router.use('/user', usersRouter);
router.use('/prod', productRouter);
router.use('/company', companyRouter);
router.use('/admin', employeeRouter);
router.use('/intend', intendRouter);
router.use('/listintend', listIntendRouter);
router.use('/characteristic', characteristicRouter);

module.exports = router;