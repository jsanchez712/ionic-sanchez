"use strict";
var express = require('express');
const app = express();
class Poema {
    constructor(id, autor, texto, genero, anyo) {
        this.id = id;
        this.autor = autor;
        this.texto = texto;
        this.genero = genero;
        this.anyo = anyo;
    }
}
const poemas = [
    new Poema(0, "Mario Benedetti", "Lorem Impsum Dolor", "Drama", 1990),
    new Poema(1, "Gloria Fuertes", "Lorem Impsum Dolor", "Drama", 1995)
];
function getPoemas() {
    return poemas;
}
app.get('/', (req, res) => res.send('La Url de poemas es http://localhost:8000/poemas '));
app.get('/poemas', (req, res) => res.json(getPoemas()));
function getPoemasById(poemaId) {
    let p;
    p = poemas.find(p => p.id == poemaId);
    return p;
}
app.get('/poemas/:id', (req, res) => {
    res.json(getPoemasById(parseInt(req.params.id)));
});
app.post('/postData', (req, res) => {
});
const bodyParser = require('body-parser');
app.post('/postData', bodyParser.json(), (req, res) => {
    console.log(res.json(req.body));
});
//app.get('/reviews', (req:any, res:any) => res.send('Got a request for reviews'));
const server = app.listen(8000, "localhost", () => {
    const { address, port } = server.address();
    console.log('Listening on %s %s', address, port);
});
