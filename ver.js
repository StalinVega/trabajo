const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;
let tem1 = 0;
let tem2 = 0;
let tem3 = 0;
let tem4 = 0;
//########################################################################
const axios = require('axios');
const clima = require('./controlador/clima');

const getInfo = async() => {
    try {
        
        const temp = await clima.getClima(-0.19, -78.5);
        tem1=temp;
        return temp;
    } catch (e) {
        return 'No se pudo determinar el clima';
    }
}


console.log(getInfo());
