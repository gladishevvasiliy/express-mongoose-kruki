const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SymbolSchema = new Schema({
  value: { type: String, required: true },
  pitch: { type: String, required: true },
  name: { type: String, required: true },
  sounds: { type: Number, required: true },
  opts: [Number]
});

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
