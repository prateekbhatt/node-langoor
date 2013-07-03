'use strict';

var express = require('express')
  , path = require('path')
  , config = require('config')
  , flash = require('connect-flash')
  , rootDir = __dirname + '/..'
  , viewsDir = rootDir + '/views'
  , publicDir = rootDir + '/public'
  ;

module.exports = function (app) {

  // Config settings
  app.configure(function(){

    app.set('port', config.port);
    
    app.set('views', viewsDir);
    app.set('view engine', 'jade');
   
    app.use(express.logger('dev'));
    
    app.use(express.limit('1mb'));
    
    app.use(express.bodyParser());

    app.use(express.methodOverride());
    app.use(express.cookieParser(config.cookieSecret));

    app.use(express.session({
        secret: config.sessionSecret
      , cookie: { maxAge: 1000*60*60 }
    }));
        
    app.use(flash());
    
    // add variables to res.locals to make them available in views
    app.use(function (req, res, next) {
      // res.locals.key = value
      next();
    });
    
    app.use(app.router);

    app.use(express.static(publicDir));
    
    app.use(function(req, res, next){
      res.status(404);

      // respond with html page
      if (req.accepts('html')) {
        res.render('404');
        return;
      }
      // respond with json
      if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
      }
      // default to plain-text. send()
      res.type('txt').send('Not found');
    });
  });

  app.configure('development', function(){
    app.use(express.errorHandler());
  });


  // Locals (available inside all templates)

  app.locals({
      pretty: config.prettyHtml
  });
}