const Joi = require("joi");

function validateRoleRegistration(role) {
  const schema = Joi.object({
    _id: Joi.string().min(2).max(255),
    name: Joi.string().min(2).max(255).required(),
    color: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(role);
}


module.exports = validateRoleRegistration;
