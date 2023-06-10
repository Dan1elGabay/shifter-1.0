const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const roleSchema   = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
},{ collection: "roles" });
//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const roleModel = mongoose.model("roles", roleSchema );
module.exports = {roleModel,roleSchema }
