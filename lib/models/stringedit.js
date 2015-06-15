var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stringEditSchema = Schema({
  input: String, // the input string to be edited
  actions: [{type: Schema.Types.ObjectId, ref: 'Action'}]
});

module.exports = mongoose.model('StringEdit',stringEditSchema);
