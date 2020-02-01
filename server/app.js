var express = require('express');
var app = express();
const bodyParser = require('body-parser');

const brujoModule = require('./Idukay/brujo-service');

const PORT = 6969;

app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(req.url);
    const allowedOrigins = ['*', 'http://localhost:4200'];
    const origin = req.headers.origin;
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-type, x-iteration, Access-Control-Allow-Headers, Authorization');
    res.header('Access-Control-Expose-Headers', 'x-iteration');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
    next();
});

app.all('*', (req, res, next) => setTimeout(() => next(), 0));

app.use(brujoModule);


app.get('/', (req, res) => {
    res.send({
        title: '(frontend)'
    });
});

app.listen(PORT, () => console.log(`Server listening ` + PORT))
.on('error', err => {
    console.error(err);
});