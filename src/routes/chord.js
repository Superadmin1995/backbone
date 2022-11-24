const { Router } = require('express');
const ctrl = require('../controllers/chord');

const router = Router();

router.get('/', ctrl.get);
router.post('/', ctrl.post);
router.get('/:id', ctrl.getById);

module.exports = router;
