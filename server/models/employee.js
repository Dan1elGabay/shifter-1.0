const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const role = require("./roles");
const dept = require("./dept");
const user = require("./userModel");
//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  address: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  city: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  state: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
    default: "ישראל",
  },
  zip: {
    type: Number,
    required: false,
    minlength: 1,
    maxlength: 7,
  },
  phone: {
    type: Number,
    required: false,
    minlength: 1,
    maxlength: 10,
  },
  role: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "role",
    },
  ],
  dept: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dept",
    },
  ],
  user: {
    name: {
      type: String,
      ref: "user",
    },
    email: {
      type: String,
      ref: "user",
    },
    password: {
      type: String,
      ref: "user",
    },
    imgUrl: {
      type: String,
      ref: "user",
    }
  },
  createdAt: { type: Date, default: Date.now },
  active: {
    type: Number,
    default: 1,
  },
});
//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const employeeModel = mongoose.model("Employee", employeeSchema);
module.exports = { employeeModel, employeeSchema };
