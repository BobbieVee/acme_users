var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var swig = require('swig');
var methodOverride = require('method-override');
var models = require('./models');



var app = express();

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));



app.set('views', __dirname + '/views');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
swig.setDefaults({cache: false});

app.use('/departments', require('./routes/departments'));

app.get('/', function(req,res){
	res.render('index', {title: 'Home'});
})

models.User.sync({})
.then(function(){
	models.Department.sync({})
})
.then(function(){
	app.listen(3001, function(){
		console.log('Server is listening on port 3001!');
	})
})
.catch(console.error);
