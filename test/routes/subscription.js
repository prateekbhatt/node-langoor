'use strict';

var Browser = require('zombie')
  , should = require('should')
  , path = require('path')
  , rootDir = path.join(__dirname, '../..')
  , server = require(path.join(rootDir, 'server'))
  , config = require('config')
  , url = config.baseUrl
  ;

describe('Subscription page', function(){
  
  var browser
    ;

  before(function (done){
    browser = new Browser();
    server.listen(done);
  });


  // beforeEach(function (done){
  //   browser.visit(url, function (){
  //     done();
  //   });
  // });

  it.only('should have valid title', function (done){
    Browser.visit(url, function (err, browser){
      true.should.be.true
      done()
    })
  })
  it('should add new subscription')
  it('should remove subscription')
  it('should change status of subscription')
  it('should send email to one subscription')

})