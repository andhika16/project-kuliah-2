const route = require('express').Router();
const fetchData = require('../config/fetchData');



route.get('/', async (req, res) => {

    const berita = await fetchData('berita').then(data => data)
    const layanan = await fetchData('layanan').then(data => data)

    res.render('beranda', {
        title: 'Pemdes Ponorogo',
        berita,
        layanan,
    });
});


route.get('/berita/:id', async (req, res) => {
    const id = req.params.id
    const berita = await fetchData('berita', id).then(data => data)
    const beritaSisipan = await fetchData('berita').then(data => data)

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
    const berita = await fetchData('berita').then(data => data)

    res.render('berita', {
        title: 'Kabar Desa',
        subTitle: 'Informasi Kabar Desa Ponorogo',
        berita

    })
})




module.exports = route