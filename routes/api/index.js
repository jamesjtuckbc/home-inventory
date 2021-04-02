const router = require('express').Router();
const booksRoutes = require('./books');
const bucketsRoutes = require('./buckets');

router.use('/books', booksRoutes);

router.use('/buckets', bucketsRoutes);

module.exports = router;
