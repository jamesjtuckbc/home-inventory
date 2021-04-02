const router = require('express').Router();
const API = require('../../../controllers/apiControllers/bucketsController');
const checkAuth = require('../../../utils/auth');

router.get('/', API.getData);

router.get('/:id', checkAuth, API.getDataById);

router.get('/search/:term', API.getDataByTerm);

router.put('/:id', checkAuth, API.updateData);

router.delete('/:id', checkAuth, API.deleteData);

router.post('/', API.addData);

module.exports = router;
