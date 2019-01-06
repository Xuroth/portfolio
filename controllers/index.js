var express = require('express'),
    router = express.Router();
router.use(require('./public/base'));
router.use('/blog', require('./public/blog'));
// router.use('/base', require('./public/base'));
// router.use('/admin', require('./admin/admin'));

module.exports = router;