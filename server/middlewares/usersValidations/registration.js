const Joi = require("joi");

function validateRegistration(user) {
  const schema = Joi.object({
    _id: Joi.string().min(2).max(255),
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    imgUrl: Joi.string().min(11).max(2048).allow(null, ''),
    isAdmin: Joi.boolean().truthy('true', true).falsy('false', false)
  });

  return schema.validate(user);
}


module.exports = validateRegistration;
