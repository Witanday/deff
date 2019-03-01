require('dotenv').config()
const express = require('express');
const PORT  = process.env.PORT || 3111;
const server = require('./server');

server.listen(PORT , ()=>{
    console.log('my server is up !!!')
})