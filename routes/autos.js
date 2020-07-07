const express = require('express')
const router = express.Router()
const autosControllers = require('../controller/autosController')

router.get('/', autosControllers.index)

module.exports = router