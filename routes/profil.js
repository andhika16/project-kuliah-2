const route = require('express').Router();








route.get('/profil-geografis', (req, res) => {
    

    res.render('profil/geografis', {
        title: 'Profil Geografis',
        subTitle: 'Informasi Geografis Desa Ponorogo'
    });
});


route.get('/profil-sejarah',  (req, res) => {
    res.render('profil/sejarah', {
        title: 'Profil Sejarah',
        subTitle: 'Asal-Usul Desa Ponorogo'

    });
});



module.exports = route