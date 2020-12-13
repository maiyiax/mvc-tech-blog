const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

const homeRoutes = require('./home-routes');

module.exports = router;