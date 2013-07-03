'use strict';

// https://gist.github.com/1128956/4ca62b1b34a69f818fdd5bd7e3ee0cf8bf060b86

/*!
 * Mailer - A nodemailer wrapper library that makes it easy to send emails using Express and Jade templates.
 * Copyright(c) 2011 Tom Shaw <tom@tomshaw.info>
 * MIT Licensed
 */
 
/**
 * Module dependencies.
 */
var nodemailer = require('nodemailer')
  , jade = require('jade')
  , path = require('path')
  , config = require('config')
  ;

/**
 * Mailer pseudo class.000
 * 
 * @param user 
 *  
 */
var Mailer = function Mailer(user) {
  if (user) this.merge(this, { _userdata: user });
  if (config.mailer) this.merge(this, config.mailer);
  if (config.aws) this.merge(this, config.aws);
  this.transport = nodemailer.createTransport("SES", {
      AWSAccessKeyID: this.key
    , AWSSecretKey: this.secret
  });
};
 
/**
 * Mailer prototype.
 */
 
Mailer.prototype = {
  
  /**
   * Merges object properties.
   */
  merge: function(a, b) {
    if (a && b) {
      for (var k in b) {
        a[k] = b[k];
      }
    }
    return a;
  },
 
  /**
   * @returns User data fetched from persistence fed in thru the object constructor.
   */
  get userdata() {
    return this._userdata;
  },
 
  /**
   * Generates some basic email instructions for nodemailer.
   * 
   * _to: - Who the email is being sent to.
   * _sender: - Who the email is being sent from.
   * _subject: - The defauly email subject.
   * _reply_to: - The email address to reply to. 
   * 
   * @returns Creates and returns an array of default email data.
   */
  get data() {
    return {
        from: this._from
      , to: this.userdata.email
      , replyTo: this._replyTo
      , subject: this._subject
      , generateTextFromHTML: true
    }
  },
  
  /**
   * Sends the actual email message with Jade template.
   */
  send: function() {
    var data = this.data;
    var userdata = this.userdata;
    var transport = this.transport;
    jade.renderFile(this.templatePath + this._template, { user: userdata }, function(err, file) {
      if(err) console.log(err);
      data.html = file;
      // data.body = file;
      transport.sendMail(data, function (err, responseStatus) {
        if(true) {
          if (err) {
            console.log(err);
          } else if (responseStatus) {
            console.log('[SUCCESSFULL EMAIL SENT TO]: ' + userdata.email);
            console.log(responseStatus.message);
          }
        }
      });
    });
  },
  
  /**
   * Returns objects properties in JSON format.
   */
  toJSON: function() {
    return this.data;
  }
  
};
 
/**
 * Exposed methods.
 */