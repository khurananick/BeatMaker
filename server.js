var http      = require("http");
var express   = require("express");
var mysql     = require('promise-mysql');
var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');
var fs        = require('fs');
var apiKeys = require('./app/secret/apiKeys.js');
var request = require('request');

var base_url = (function() {
  if(process.env.PRODUCTION)
    return "http://a3096843.ngrok.io";
  return "http://localhost:8080";
})();

var port = (function() {
  if(process.env.PRODUCTION) return { http: 80 };
  else return { http: 8080 };
})();

var DB = (function() {
  var creds = (function() {
    if(process.env.PRODUCTION)
      return {};
    else
      return { host: 'localhost', user: 'root', password: 'password', database: 'porthackapp' };
  })();
  creds.connectionLimit = 1;
  return mysql.createPool(creds);
})();

var httpApp = express();
httpApp.set('views', __dirname + "/app/views");
httpApp.set('view engine', 'pug');
httpApp.use(express.static(__dirname + "/static/",{
  setHeaders: function(res, path) {
    res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
}));

httpApp.use(bodyParser.json({limit: '50mb', parameterLimit: 10000}));
httpApp.use(bodyParser.urlencoded({limit: '50mb', parameterLimit: 10000, extended: true}));
httpApp.use(cookieParser());
httpApp.disable('x-powered-by');
httpApp.disable('content-length');
httpApp.disable('content-type');
httpApp.disable('etag');

httpApp.use(function (req, res, next) {
  req.DB = DB;
  req.PRODUCTION = process.env.PRODUCTION;
  req.STATIC_DIR = (__dirname + "/static");
  res.locals.base_url = base_url;
  res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

var router = express.Router();
httpApp.use('/', router);

require('./app/controllers/index')(router);

router.get('/api/status', function(req,res) {
  res.status(200).send({ online: true });
});

var httpServer = http.createServer(httpApp).listen(port.http);
console.log("Listening on port:", port.http);

