const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getMutasis);
router.get('/:id', controller.getMutasiById);

module.exports = router;
