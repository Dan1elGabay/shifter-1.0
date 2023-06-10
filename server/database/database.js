const mongoose = require('mongoose');
require('dotenv').config()
const chalk = require("chalk");



mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, dbName: 'Shifter',useUnifiedTopology: true })
.then(() => {
    console.log(chalk.magentaBright.bold("Connected to the database!"))
  })
  .catch(err => {
    console.log(chalk.redBright.bold("Cannot connect to the database!", err));
    process.exit();
  });

