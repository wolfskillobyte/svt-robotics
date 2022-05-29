const router = require('express').Router();

const { getAllRobots } = require('../../controllers/robot-controller');



router.route('/').get(getAllRobots);

module.exports = router;
