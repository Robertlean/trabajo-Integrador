const express = require('express')
const router = express.Router()
const sucursalesControllers = require('../controller/sucursalesController')

router.get('/', sucursalesControllers.index)
router.get('/:sucursales', sucursalesControllers.idSucursal)

module.exports = router