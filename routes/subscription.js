'use strict';

exports.index = function (req, res) {
  req.flash('success', 'Welcome to langoor!')
  res.render('index',
    { success: req.flash('success'), error: req.flash('error') });
};