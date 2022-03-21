const express = require('express');
const app = express();
const port = 3000;
// Here's our test data
var data = require('./data/test.json');

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'My Home Page';
  res.render('pages/index', {title:title});
});

app.get('/kiki', (req, res) => {
  var title = 'Kiki Delivery';
  res.render('pages/kiki', {title:title});
});

app.get('/spirited', (req, res) => {
  var title = 'Spirited Away';
  res.render('pages/spirited', {title:title});
});

app.get('/totoro', (req, res) => {
  var title = 'Totoro';
  res.render('pages/totoro', {title:title});
});

//list page of users
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});