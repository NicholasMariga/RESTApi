const mongoose = require("mongoose");

//creating a schema
const subscriberSchema = new mongoose.Schema({
  //javascript object with all keys
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: String,
    required: true,
    default: Date.now
  },
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
