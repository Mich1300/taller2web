const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app, db) {
    //Configurar ruta inicial
    app.get('/', function (req, res) {
        console.log('hola en la consola');
        //Responder con un archivo
        res.sendFile(path.join(__dirname, '/public/index.html'));
    });

    //Ruta para la lista de productos con handlebars
    app.get('/store', function (req, res) {

        var filters = {
            $and: []
        };

        if (filters.$and.length == 0) {
            delete filters.$and;
        }
        //Filtros

        var sortings = {};

        //Orden

        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filters).sort(sortings).toArray(function(err, docs) {
            assert.equal(err, null);

            //Objeto contexto
            var context = {
                products: docs,
            };

            //Renderizar vista
            res.render('products', context);
        });
    });
}
module.exports = configureRoutes;