"use strict"

const dotenv = require('dotenv');
const express = require('express');
const app = express();
const uri = 'mongodb+srv://andhika:dhika.12345@node-tuts.4yfq2.mongodb.net/pemdes_tatung?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000;
const path = require('path');
const dbConnect = require('./config/dbConnect')
const expresslayout = require('express-ejs-layouts');
// ----------------- adminbro -----------------------
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const Layanan = require('./model/layanan')
const Berita = require('./model/berita')

// ------------------ ADMINBRO ----------------------

const AdminBro = require('admin-bro')
AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  resources: [Layanan,Berita],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

// ------------------ ADMINBRO ----------------------



// ----------------- database -----------------------
dbConnect(uri, 'pemdes')


    
    app.listen(PORT, () => {
        console.log(`Admin dan Server berjalan di port : ${PORT}`);
    });


dotenv.config({
    path: './config/config.env'
})
// layout
    app.set('view engine', 'hbs');
    app.use(expresslayout);
    app.set('view engine', 'ejs');
    // middleware
    app.use(express.static('public'));
app.use(express.urlencoded({
        extended:true
    }))


app.use('/', require('./routes/index'))
app.use('/profil', require('./routes/profil'))
// app.use('/admin', require('./routes/admin')) 













