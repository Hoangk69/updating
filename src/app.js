const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')
const path = require('path')
const routers = require('./resources/routes')
const db = require('./config/db')


app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum(a,b) { return a + b }
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// midoware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//router
routers(app);

// connect to DB
db.connect();

// app.get('/news',(req, res)=>{
//   res.render('news')
// })

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
