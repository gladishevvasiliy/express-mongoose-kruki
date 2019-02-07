
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let KrukSchema = new Schema({
  name: { type: String, required: true },
  symbols: [
    {
      value: { type: String },
      pitch: { type: String },
      name: { type: String },
      sounds: { type: Number },
      opts: [String]
    }
  ]
});

// Export the model
module.exports = mongoose.model("Kruk", KrukSchema);