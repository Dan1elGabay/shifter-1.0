const Joi = require("joi");

function validateUpdateRole(role) {
  const schema = Joi.object({
    _id: Joi.string().min(2).max(255),
    name: Joi.string().min(2).max(255).required(),
    color: Joi.string().min(6).max(255).required(),
    createdAt:Joi.string().min(2).max(255),
    __v:Joi.number().min(0).max(2)
  });

  return schema.validate(role);
}


module.exports = validateUpdateRole;
