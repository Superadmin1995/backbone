const { Router } = require('express');

const router = Router();

router.get('/ping', (_, res) => res.send('pong'));
router.use('/users', require('./user'));

module.exports = router;
