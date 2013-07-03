var path = require('path')
  , rootDir = path.join(__dirname, '../..')
  , Subscription = require(path.join(rootDir, 'models', 'Subscription'))
  , db = require(path.join(rootDir, 'server', 'db'))
  , should = require('should')
  ;

describe('Subscription model', function(){

  var currentSub
    ;

  before(function (done){
    db.connect(done);
  });

  after(function (done){
    db.disconnect(done)
  })

  beforeEach(function (done){
    Subscription.create({
      email: 'mike.moe@example.com'
      , name: 'Mike Moe'
      , desc: 'Programmer'
      , phon: '+1-99999999999'
      , web: 'www.mike.example.com'
      , addr: '1 Hacker Way, SF'
    },
    function (err, newSub){

      currentSub = newSub;
      done();

    });
  });

  afterEach(function (done){
    Subscription.remove({}, function (err){
      done();
    });
  });

  it('should create new subscription', function (done){
    Subscription.create({
      email: 'john.doe@example.com'
      , name: 'John Doe'
      , desc: 'Hacker'
      , phon: '+1-99999999999'
      , web: 'www.john.example.com'
      , addr: '1 Hacker Way, SF'
    },
    function (err, newSub){

      should.not.exist(err);
      newSub.should.have.property('name', 'John Doe');
      done();

    });
  });

  it('should have #created field', function (){
    currentSub.should.have.property('created');
  });

  it('should have #updated field', function (){
    currentSub.should.have.property('updated');
  });

  it('should change status of subscription to #bounced')
  it('should update current subscription')
  it('should find subscription by email')

})