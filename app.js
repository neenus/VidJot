const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();

// connnect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {
  useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ... routes ...
// Index route 
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

// about route 
app.get('/about', (req, res) => {
  res.render('about');
});
const port = 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started and listening on port ${port}`);
});