const { Router } = require('express');

const router = Router();

router.get('/ping', (_, res) => res.send('pong'));
router.use('/user', require('./user'));
router.use('/chords', require('./chord'));

module.exports = router;
