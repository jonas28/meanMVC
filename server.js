var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    stepsController = require('./server/controllers/steps-controller');

mongoose.connect('mongodb://localhost:27017/todomvc');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/lib', express.static(__dirname + '/client/lib'));

//REST API
app.get('/api/todos', stepsController.list);
app.get('/api/todos/:id', stepsController.show);
app.put('/api/todos/:id', stepsController.update);
app.delete('/api/todos/:id', stepsController.remove);
app.post('/api/todos', stepsController.create);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})