const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const flash = require('express-flash');
const morgan = require('morgan');
const path = require('path');
const app = express();
// var hbs = require('express-handlebars').create({defaultLayout: 'main', extname: '.hbs'});
// const extend = require('handlebars-extend-block');
const exphbs = require('express-hbs');
const port = 3001;

// hbs.handlebars = extend(hbs.handlebars);

require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

app.use(helmet());

if(isProduction) {
	app.use(morgan('common'))
} else {
	let format = '[:date[web]] - :method ":url" Status: :status\n    From: :remote-addr - HTTP/:http-version\n    Response Time: :response-time ms';
	app.use(morgan(format))
}

app.set('trust proxy', true);
app.engine('.hbs', exphbs.express4({
	partialsDir: path.join(__dirname,'views/partials'),
	layoutsDir: __dirname + '/views/layouts',
	defaultLayout: __dirname + '/views/layouts/main'
}));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.use(require('./middlewares/logger'));

app.use(require('./controllers'));

app.use(express.static(__dirname + '/public'));
// hbs.getPartials().then( data => {
//     const partials = data;
//     console.log(partials);
// });
app.use( (req, res, next) => {
    res.status(404).render('error404');
});
app.listen(process.env.PORT || 3000, () => console.log(`App running on ${process.env.PORT || 3000}`))
