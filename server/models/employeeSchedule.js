const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employee = require("./employee");

//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const employeeScheduleSchema = new Schema({
  employee: {
    _id: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "employee", // Reference to employee model
    },
    firstName: {
      type: String,
      ref: "employee", // Reference to employee model
    },
    lastName: {
      type: String,
      ref: "employee", // Reference to employee model
    }
  },
  sunday: {
    type: String,
    default: "",
  },
  monday: {
    type: String,
    default: "",
  },
  tuesday: {
    type: String,
    default: "",
  },
  wednesday: {
    type: String,
    default: "",
  },
  thursday: {
    type: String,
    default: "",
  },
  friday: {
    type: String,
    default: "",
  },
  saturday: {
    type: String,
    default: "",
  },
  active: {
    type: Number,
    default: 1,
  },
});
//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const employeeScheduleModel = mongoose.model(
  "employeeSchedule",
  employeeScheduleSchema
);
module.exports = { employeeScheduleModel };
