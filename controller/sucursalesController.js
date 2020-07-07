const fs = require('fs')
const autos = require('./autosController')
const db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const sucursalesControllers = {
    index: function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('\t\t\t\t\tSUCURSALES\n\n\n')
        db.forEach(function(sucu){
            res.write('\n--------\n\nSucursal: '+sucu.sucursal+'\n\nDirección: '+sucu.direccion+'\nTelefono: '+sucu.telefono)
        })

        res.end()
    },
    idSucursal:function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id = req.params.sucursales
        db.forEach(function(param){
            if (param.sucursal == id){
                res.write('Bienvenidos a la sucursal de '+param.sucursal+'\n\n\nDirección: '+param.direccion+'\n\nTelefono: '+param.telefono+'\n\n\nNuestros vehiculos disponibles\n')
                param.autos.forEach(function(auto){
                    res.write('\n\nMarca: '+auto.marca+'\nModelo: '+auto.modelo+'\nAño: '+auto.anio+'\nColor: '+auto.color+'\n')
                })
                res.end()
            }
        })
        res.send('Por favor, vuelve a ingresar una sucursal válida')  
            
    }    
}
module.exports = sucursalesControllers