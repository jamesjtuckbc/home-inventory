const router = require('express').Router();
const API = require('../../../controllers/apiControllers/booksController');
const checkAuth = require('../../../utils/auth');

router.get('/', checkAuth, API.getData);

router.get('/:id', checkAuth, API.getDataById);

router.get('/search/:term', API.getDataByTerm);

router.put('/:id', checkAuth, API.updateData);

router.delete('/:id', checkAuth, API.deleteData);

router.post('/', API.addData);

module.exports = router;
