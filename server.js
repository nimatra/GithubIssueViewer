var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./config/webpack.prod');
var githubApi = require('./Routes/GithubApi');
var bodyParser = require('body-parser');

var app = express();
var compiler = webpack(config);
var port = process.env.PORT || 3000;

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
// Routers

var addinRouter = express.Router({ mergeParams: true });

app.use('/api', githubApi);

app.use('/public', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/static'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
