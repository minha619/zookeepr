const router = require('express').Router();
const animalRoutes = require('./animalRoutes');
const zookeepersRoutes = require('./zookeepersRoutes');

router.use('/animals', animalRoutes);
router.use('/zookeepers', zookeepersRoutes);

module.exports = router;


