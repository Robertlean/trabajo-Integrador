const fs = require('fs')
const db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))
const homeControllers = {
    index:(req, res)=>{
        res.write("Bienvenido a nuestro centro de sucursales\n\nNuestras sucursales estan ubicadas en: ")
        db.forEach(function(sucu){
            res.write('\n #'+sucu.sucursal)
        })
        res.end()
    }
}
module.exports = homeControllers