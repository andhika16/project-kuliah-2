const route = require('express').Router();
const fetchData = require('../config/fetchData');








route.get('/', async (req, res) => {
 
    const berita = await fetchData('berita').then(data => data)
    const layanan = await fetchData('layanan').then(data => data)
   
    res.render('beranda', {
        title: 'Pemdes tatung',
        berita,
        layanan,
    });   
});


route.get('/berita/:id', async (req, res) => {
    const id = req.params.id
    const berita = await fetchData('berita',id).then(data => data)

    res.render('berita/berita-page', {
        title: 'Berita Desa Tatung',
        subTitle: 'Informasi Terkini Seputar Desa Tatung',
        berita
    });
});

route.get('/layanan', async (req, res) => {
    const layanan = await fetchData('layanan').then(data => data)


    res.render('layanan', {
        title: 'Layanan Publik Desa Tatung',
        subTitle:'Infomasi Pelayanan Desa Tatung',
        layanan
    });
});


route.get('/layanan/:id', async (req, res) => {
    const id = req.params.id
    const layanan = await fetchData('layanan',id).then(data => data)

    res.render('layanan/layanan-page', {
        title: 'Layanan Publik Desa Tatung',
        subTitle : 'Informasi Layanan Publik desa Tatung',
        layanan
    });
});



route.get('/berita', async (req, res) => {
    const berita = await fetchData('berita').then(data => data)

    res.render('berita', {
        title: 'Kabar Desa',
        subTitle:'Informasi Kabar Desa Tatung',
        berita
        
    })
})




module.exports = route