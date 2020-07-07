const express = require('express')
const app = express()

//requerir las rutas!
const rutaAuto = require('./routes/autos.js');
const rutaHome = require('./routes/home.js')
const rutaMarcas = require('./routes/marcas.js')
const rutaSucursales = require('./routes/sucursales.js')

//levantado el servidor
app.listen(3000, ()=>console.log('Servidor cargado!'))

//Llamando metodos de express
app.use('/marcas', rutaMarcas)
app.use('/autos', rutaAuto)
app.use('/sucursales', rutaSucursales)
app.use('/',rutaHome)