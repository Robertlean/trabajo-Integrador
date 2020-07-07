const fs = require('fs')
const db = JSON.parse(fs.readFileSync('./data/concesionarias.json'))

const autosControllers = {
    index: function (req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('Lista de todos nuestros autos en nuestras consecionarias\n\n')
        db.forEach(function(sucursal){
            sucursal.autos.forEach(function(autos){
                res.write('---------\nMarca: '+ autos.marca+'\nModelo: '+autos.modelo+'\nAño: '+ autos.anio+ '\nColor: '+autos.color+'\n\n')
            })
        })
        res.end()
    }
}
module.exports = autosControllers