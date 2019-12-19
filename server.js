const express = require('express');
const app = express();
const clima = require('./controlador/clima');
const axios = require('axios');
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

let clQ = 0;
let clM = 0;
let clG = 0;
let clP = 0;

const getInfoQ = async() => {
    let clim = await clima.getClima(-0.19, -78.5).then(function(dato){
        clQ = dato;
        return dato;
    });
}
const getInfoG = async() => {
    let clim = await clima.getClima(2.1961601, -79.8862076).then(function(dato){
        clM = dato;
        return dato;
    });
}
const getInfoM = async() => {
    let clim = await clima.getClima(-3.7025600, 40.4165000).then(function(dato){
        clG = dato;
        return dato;
    });
}
const getInfoP = async() => {
    let clim = await clima.getClima(.3486000, 48.8534000).then(function(dato){
        clP = dato;
        return dato;
    });
}

getInfoQ();
getInfoM();
getInfoP();
getInfoG();


app.get('/', function(req, res) {
    const tempq = clQ;
    const tempg = clG;
    res.render('home', {
        nombre: "stalin vega",
        cq: "Quito: "+tempq,
        cg: "Guayaquil: "+tempg
    });
});

app.get('/about', (req, res) => {
    const tempm = clM;
    const tempp = clP;
    res.render('about', {
        nombre: "stalin vega",
        cm: "Madrid "+tempm,
        cp: "Paris "+tempp
    });
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
