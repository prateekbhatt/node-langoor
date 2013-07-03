'use strict';

exports.index = function (req, res) {
  res.render('index',
    { success: req.flash('success'), error: req.flash('error') });
};