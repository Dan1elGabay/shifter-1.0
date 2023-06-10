const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require('./userModel')
const shift = require('./shiftModel')
//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const replacementSchema  = new Schema({
  fromUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  toUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  shiftId: { type: mongoose.Schema.Types.ObjectId, ref: 'shift', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});
//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const replacementModel = mongoose.model('Replacement', replacementSchema);
module.exports = {replacementModel,replacementSchema}
