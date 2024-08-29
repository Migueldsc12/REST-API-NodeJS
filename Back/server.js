const express = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
    host: 'localhost',
    port: 3305,
    user: 'root',
    password: 'salomon2828',
    database: 'library'
}

//middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api', routes);

// Server running
app.listen(app.get('port'), () =>[
    console.log('Server is running on port', app.get('port'))
])