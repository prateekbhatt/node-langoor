'use strict';

var path = require('path')
  , rootDir = path.join(__dirname, '..')
  , Subscription = require(path.join(rootDir, 'models', 'Subscription'))
  ;

exports.index = function (req, res){
  Subscription.find({}, function (err, subs){
    if (err) return next(err);
    res.subscribers = subs;
    res.render('index',
      { success: req.flash('success'), error: req.flash('error') });
  });
};

exports.create = function (req, res){
  var newSub = req.body.sub;

  Subscription.create(newSub, function (err, savedSub){
    if (err) return next(err);
    req.flash('success', 'Added new subscription');
    res.redirect('/');
  });
};