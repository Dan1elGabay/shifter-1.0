const Joi = require("joi");
const mongoose = require("mongoose");

function validateUpdateUser(user) {
  const schema = Joi.object({
    _id: Joi.string().min(2).max(255),
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    imgUrl: Joi.string().min(11).max(2048).allow(null, ""),
    isAdmin: Joi.boolean().truthy("true", true).falsy("false", false),
    createdAt: Joi.string().min(2).max(255),
    updatedAt: Joi.string().min(2).max(255),
    roles: Joi.array().items(Joi.object({
      _id: Joi.string()
        .custom((value, helpers) => {
          if (!mongoose.isValidObjectId(value)) {
            return helpers.error("any.invalid");
          }
          return value;
        })
        .required(),
      name: Joi.string().min(2).max(255),
      color: Joi.string().min(2).max(255),
      createdAt: Joi.string().min(2).max(255),
      __v: Joi.number().min(0).max(2),
    })),
    __v: Joi.number().min(0).max(2),
  });

  return schema.validate(user);
}

module.exports = validateUpdateUser;
