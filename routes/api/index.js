const router = require('express').Router();
const robotRoutes = require('./robot-routes');

router.use('/robots', robotRoutes);

module.exports = router;
