const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shift = require('./shiftModel')
//* Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const scheduleSchema  = new Schema({
  scheduleName: {
    type: String,
    required: true
  },
  scheduleStartDate: {
    type: Date,
    required: true
  },
  scheduleEndDate: {
    type: Date,
    required: true
  },
  shifts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shift'
  }],
  status: {
    type: String,
    enum: ['active', 'published', 'completed','canceled'],
    default: 'active'
  },
  createdAt: { type: Date, default: Date.now },

},{ timestamps: true });

//* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const scheduleModel = mongoose.model('Schedule', scheduleSchema);

module.exports = {scheduleModel,scheduleSchema};
