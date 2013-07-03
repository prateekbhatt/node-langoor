var path = require('path')
  , rootDir = path.join(__dirname, '../..')
  , Subscription = require(path.join(rootDir, 'models', 'Subscription'))
  , db = require(path.join(rootDir, 'server', 'db'))
  ;

describe('Subscription model', function(){

  before(function (done){
    db.connect(done);
  });

  after(function (done){
    db.disconnect(done)
  })

  // beforeEach(function (done){
  //   Subscription.create({});
  // })

  // afterEach(function (){
  //   Subscription.remove({}, function (err){
  //     done();
  //   })
  // })

  it('should create new subscription')
  it('should have #created field')
  it('should have #updated field')
  it('should change status of subscription to #bounced')
  it('should update current subscription')
  it('should find subscription by email')

})