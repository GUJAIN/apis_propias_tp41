const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/apiGenresController');

router.get('/apiGenres', apiGenresController.list);
router.get('/apiGenres/detail/:id', apiGenresController.detail);


module.exports = router;