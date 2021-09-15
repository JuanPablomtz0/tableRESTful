var express = require('express');
var router = express.Router();

const controller = require('../controllers/users')

/* GET users listing. */
router.get('/results/:n1/:n2', controller.sumar);

router.post('/results/:n1/:n2', controller.multiplicar);

router.put('/results/:n1/:n2', controller.dividir);

router.patch('/results/:n1/:n2', controller.potencia);

router.delete('/results/:n1/:n2', controller.restar);

module.exports = router;
