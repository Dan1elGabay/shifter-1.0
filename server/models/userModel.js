const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roles = require("../models/roles");
//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 256,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "roles",
    required: true,
  }],
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
},{ timestamps: true });

//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const userModel = mongoose.model("user", userSchema);

module.exports = {userModel,userSchema};
