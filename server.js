require('dotenv').config()
const express = require('express');
const server = express();
const helmet = require('helmet');


server.use(helmet());
server.use(express.json());

server.get('/', (req,res)=>{

    res.json({greetin:'Hello , it works'})
})

server.get('/hello', (req,res)=>{

    res.json({greetin:'Hello , it works gggggggggggggggggggg'})
})
module.exports = server;