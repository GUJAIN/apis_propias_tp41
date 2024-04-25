const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/apiMoviesController');

router.get('/apiMovies', apiMoviesController.list);
router.get('/apiMovies/detail/:id', apiMoviesController.detail);
router.post('/apiMovies', apiMoviesController.create)
router.delete('apiMovies/:id',apiMoviesController.destroy)


module.exports = router;