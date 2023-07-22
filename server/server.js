
require('dotenv').config();

//* require and activate express
const express = require('express');
const app = express();
const path = require('path');

// *console.log(process.env.SERVER_PORT);

//! uncomment on first load
// require("./database/seed")();

// //* static folder
app.use(express.static('./public/asset'))

//* ===  Cors-handle different GET routes === //
const cors = require('cors');
app.use(cors());
//* === body-parser  === //
const bodyParser = require('body-parser');
//* enable express to parse html FORM data inside the request body
app.use(bodyParser.urlencoded({
    extended: false
}));
//* enable express to parse json data inside the request body
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Terminal string styling//
const chalk = require("chalk");

//HTTP request logger middleware for node.js
const morgan = require("morgan");
app.use(morgan(chalk.cyan(":method :url :status :response-time ms")));

//Implementing rate limiting helps protect your server from abuse or excessive traffic from a single user or IP address. 
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    max: 100, // maximum number of requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
  });
  app.use(limiter);
  
//* ===Static Folder: 'Uploads'
const dirname = path.resolve();
app.use('/uploads', express.static(path.join(dirname, '/uploads')));
app.use('/assets', express.static(path.join(dirname, '/assets')));

//* === Routes === //

const indexRouter = require('./routes/index'); app.use('/',indexRouter);
const userRouter = require('./routes/userRouter'); app.use('/api/users',userRouter);
const rolesRouter = require('./routes/rolesRouter'); app.use('/api/roles',rolesRouter);
const contactFormRouter = require('./routes/contactFormRouter'); app.use('/api/contact-form/messages',contactFormRouter);



//* === run the server (on port ****) === //
app.listen(process.env.PORT, () => {
            console.log(`\n =======${new Date().toDateString()}=======`);
            console.log(chalk.blueBright.bold('Server is running on port http://localhost:**** ⚽'));})