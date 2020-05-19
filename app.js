const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.set('port', process.argv[2]);

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/experience', (req, res) => {
    res.render('experience');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log(`Express started on http://${process.env.HOSTNAME}:${app.get('port')}; press Ctrl-C to terminate.`);
});