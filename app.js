const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'stalin',
        edad: 22,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write("Hola Mundo, desde nodeJS!");
    res.end();
}).listen(8085);

console.log("Escuchando en el puerto 8085");