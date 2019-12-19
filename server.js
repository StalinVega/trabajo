const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;
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


 console.log(tem1);

app.use(express.static(__dirname + '/public'));



// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    //const grQui = tem1;
    //const grGua = tem2;
    res.render('home', {
        nombre: "stalin vega",
        //tempQuito: grQui
    });
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

