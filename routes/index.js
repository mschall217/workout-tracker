const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');
const path = require('path')

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;