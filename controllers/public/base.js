//Base front-facing routes
var express =   require('express'),
    router  =   express.Router();
var    baseModel =  require('../../models/baseModel');

router.get('/', (req, res) => {
    res.render('pages/index');
});

router.get('/about', (req, res) => {
    res.render('pages/about')
})

router.get('/contact', (req, res) => {
	res.render('pages/contact')
})

router.get('/projects', (req, res) => {
    res.render('pages/projects')
})

router.get('/resume', (req, res) => {
    res.render('pages/resume')
})

module.exports = router;