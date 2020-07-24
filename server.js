const http          = require("http");
const express       = require("express");
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');

IS_PRODUCTION = process.env.PRODUCTION;
BASE_URL = IS_PRODUCTION ? "http://beatmaker.benerdy.net" : "http://localhost:8080";
PORT = IS_PRODUCTION ? { http: 80 } : { http: 8080 };
STATIC_DIR = (__dirname + "/static");

const router = express.Router();
const httpApp = express();
httpApp.set('views', __dirname + "/app/views");
httpApp.set('view engine', 'pug');
httpApp.use("/static", express.static(STATIC_DIR));
httpApp.use(bodyParser.json({limit: '50mb', parameterLimit: 10000}));
httpApp.use(bodyParser.urlencoded({limit: '50mb', parameterLimit: 10000, extended: true}));
httpApp.use(cookieParser());
httpApp.disable('x-powered-by');
httpApp.disable('etag');
httpApp.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Origin',  '*');
  next();
});
httpApp.use('/', router);

require('./app/controllers/index')(router);

router.get('/api/status', function(req,res) {
  res.status(200).send({ online: true });
});

const httpServer = http.createServer(httpApp).listen(PORT.http);
console.log("Listening on port:", PORT.http);

