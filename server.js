// impotamos los modulos
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
const exhandle = require('express-handlebars');

// importamos las rutas
const configureRoutes = require('./routes');

// creamos el servidor
const app = express();

// configuramos la carpeta publica
app.use(express.static('public'));

//configuramos handlebars

app.engine('handlebars', exhandle());
app.set('view engine', 'handlebars');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'store';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    configureRoutes(app, db);
});


app.listen(3000, function () {
    console.log('servidor iniciado en el puerto 3000');
});


