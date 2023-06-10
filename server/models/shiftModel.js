const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employee = require('./employee')
//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const shiftSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      shiftStartTime: {
        type: Date,
        required: true
      },
      shiftEndTime: {
        type: Date,
        required: true
      },
      employeesAssigned: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'employee' // Reference to employee model
      },
      status: {
        type: String,
        enum: ['active', 'inactive', 'completed'],
        default: 'active'
      },
  createdAt: { type: Date, default: Date.now },

},{ timestamps: true });

//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const shiftModel = mongoose.model("User", shiftSchema);

module.exports = {shiftModel,shiftSchema};
