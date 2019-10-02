const app = require('express')();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})


<a href="/" class="btn btn-primary">Home</a>require('./routes/produtos')(app);


app.listen(3333, () => {
    console.log("Server is running.");
})
