'use strict';

var Subscription = function(){

  var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , troop = require('mongoose-troop')
    ;

  var SubscriptionSchema = new Schema({
      email: { type: String, required: true, unique: true }
    , name: { type: String }
    , desc: { type: String } // description
    , phon: { type: String } // phone
    , web: { type: String } // website
    , addr: { type: String } // address
  });

  // adds created and updated timestamps to the document
  SubscriptionSchema.plugin(troop.timestamp, {modifiedPath: 'updated', useVirtual: false});

  var _model = mongoose.model('Subscription', SubscriptionSchema);
  
  return _model;
  
}();


module.exports = Subscription;