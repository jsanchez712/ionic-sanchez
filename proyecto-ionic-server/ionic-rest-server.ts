var express = require('express');
const app = express();

class Poema{
    constructor(
        public id: number,
        public autor: string,
        public texto: string,
        public genero: string,
        public anyo: number
    ){}
}
const poemas = [
    new Poema(0,"Mario Benedetti","Lorem Impsum Dolor","Drama",1990),
    new Poema(1,"Gloria Fuertes","Lorem Impsum Dolor","Drama",1995)
]
function getPoemas(): Poema[]{
    return poemas;
}

app.get('/', (req:any, res:any) => res.send('La Url de poemas es http://localhost:8000/poemas '));
app.get('/poemas', (req: any, res: any) => res.json(getPoemas()));

function getPoemasById(poemaId: number): Poema{
    let p:any;
    p = poemas.find(p => p.id==poemaId);
    return p;
}

app.get('/poemas/:id',(req:any,res:any)=>{
    res.json(getPoemasById(parseInt(req.params.id)));
});

app.post('/postData', (req: any, res:any) => {

});

const bodyParser = require('body-parser')

app.post('/postData', bodyParser.json(), (req:any, res:any) => {
    console.log(res.json(req.body));
   })

//app.get('/reviews', (req:any, res:any) => res.send('Got a request for reviews'));
const server = app.listen(8000, "localhost", () => {
    const {address, port} = server.address();
    console.log('Listening on %s %s', address, port);
});
