const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const contactMessageSchema = new Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 100,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
      minlength: 1,
      maxlength: 10,
    },
    message: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    createdAt: { type: Date, default: Date.now },
  }, { timestamps: true });

//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const contactMessagesModel = mongoose.model("ContactMessage", contactMessageSchema);

module.exports = { contactMessagesModel, contactMessageSchema };