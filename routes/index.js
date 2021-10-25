const route = require('express').Router();
const fetchData = require('../config/fetchData');
const Berita = require('../model/berita');
const { findById } = require('../model/layanan');
const Layanan = require('../model/layanan');


route.get('/', async (req, res) => {

    try {
     const berita = await Berita.find()
     const layanan = await Layanan.find()
        res.render('beranda', {
            title: 'Pemdes Ponorogo',
            berita,
            layanan,
        });  

    } catch (error) {
        console.log(error);
    }
   
});


route.get('/berita/:id', async (req, res) => {
    const id = req.params.id
    const berita = await Berita.findById(id)
    const beritaSisipan = await Berita.find()

    res.render('berita/berita-page', {
        title: 'Berita Desa Ponorogo',
        subTitle: 'Informasi Terkini Seputar Desa Ponorogo',
        berita,
        beritaSisipan
    });
});

route.get('/layanan', async (req, res) => {
    const layanan = await fetchData('layanan').then(data => data)
    res.render('layanan', {
        title: 'Layanan Publik Desa Ponorogo',
        subTitle: 'Infomasi Pelayanan Desa Ponorogo',
        layanan
    });
});


route.get('/layanan/:id', async (req, res) => {
    const id = req.params.id
    const layanan = await fetchData('layanan', id).then(data => data)

    res.render('layanan/layanan-page', {
        title: 'Layanan Publik Desa Ponorogo',
        subTitle: 'Informasi Layanan Publik desa Ponorogo',
        layanan
    });
});



route.get('/berita', async (req, res) => {
    const berita = await Berita.find()

    res.render('berita', {
        title: 'Kabar Desa',
        subTitle: 'Informasi Kabar Desa Ponorogo',
        berita

    })
})




module.exports = route