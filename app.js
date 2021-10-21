"use strict"

const dotenv = require('dotenv');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const expresslayout = require('express-ejs-layouts');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);



app.listen(PORT, () => {
    console.log(`server running port : ${PORT}`);
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











