var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  text: {type: String}
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;
