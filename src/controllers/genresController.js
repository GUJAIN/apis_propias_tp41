const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
               // return res.json(genres)
                res.render('genresList.ejs', {genres})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
               //return res.jason(genre) 
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;