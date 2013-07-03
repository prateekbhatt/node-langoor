'use strict';

module.exports = {
    baseUrl: 'http://localhost:8000/'
  , port: 8000
  , dbPath: 'mongodb://localhost/langoortest'
  , cookieSecret: '42langoorsgonewild'
  , sessionSecret: '42langoorsgonewild'
  , adminMail: ''
  , aws: {
      key: ''
    , secret: ''
  }
  , mailer: {
      _from: ''
    , _replyTo: ''
    , templatePath: __dirname + '/../views/emails/'
    , debug: false
  }
  , prettyHtml: true
}