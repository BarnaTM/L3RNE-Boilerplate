var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var messages = require('./routes/messages');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/messages', messages);

process.on('uncaughtException',(err) => {
  fs.writeSync(1,`Caught exception: ${err}\n`);
});


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'build/index.html'),function(err){
    if(err) {
      res.status(500).send(err)
    }
  })
});

module.exports = app;
