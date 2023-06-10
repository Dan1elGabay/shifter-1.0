const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require('./userModel')
//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const deptSchema  = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});
//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const deptModel = mongoose.model("Dept", deptSchema);
module.exports = {deptModel,deptSchema}
