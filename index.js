const express = require('express')
const env = require('./config/environment');
const logger = require('morgan');
const app = express()
const port = 8000
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require('./config/cors');
const ejs = require('ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(logger(env.morgan.mode, env.morgan.options));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// use express router
app.set('view engine', 'ejs');
app.set('views', './view');
app.use(express.static('assets'));

app.use('/test', require('./routes'));

app.use('*', function(req, res){
  res.status(404).json({
      message: `Page Not Found ${req.get('host')}${req.originalUrl}`
  });
});

app.listen(port, () => {
  console.log(`App is listening at port ${port}`)
})