const express = require('express')
const pug = require('pug');

const app = express();
app.set('view engine', 'pug')
app.set('views', './src/views')

app.get('/', (req,res) => {
    res.render('index');
})
app.listen(1220, () => console.log("Listening on port 1220"))