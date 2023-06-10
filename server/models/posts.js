const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require('./userModel')

//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const postSchema   = new Schema({
  title: { type: String, required: true, minlength: 1, maxlength: 100 },
  type: { type: String, required: true },
  description: { type: String },
  image: {
    url: { type: String },
    alt: { type: String }
  },
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  author: { type: String, required: true }
});
//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const postModel = mongoose.model("Post", postSchema);
module.exports = {postModel,postSchema}
