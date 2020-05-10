// impotamos los modulos

const express = require('express');
const exhandle = require('express-handlebars');

// importamos los productos

const products = require('./products');

// creamos el servidor

const app = express();

// configuramos la carpeta publica

app.use(express.static('public'));

//configuramos handlebars

app.engine('handlebars', exhandle());
app.set('view engine', 'handlebars');

//conectar cositas con chrome
app.get('/', function (req, res) {

     console.log('Holi en la consola');
     res.send('hola en chrome');
    
    });
app.listen(3000, function(){
    console.log('servidor iniciado en el puerto 3000');
});


