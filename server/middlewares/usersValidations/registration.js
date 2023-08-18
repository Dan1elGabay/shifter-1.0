const Joi = require("joi");

function validateRegistration(user) {
  const schema = Joi.object({
    _id: Joi.string().min(2).max(255),
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string()
      .min(8)
      .max(1024)
      .required()
      .custom((value, helpers) => {
        const passwordPattern = /^([@#](?=[^aeiou]{7,13}$)(?=[a-zA-Z0-9]{7,13}$)(?=.*[A-Z]{1,})(?=.*\d{4,})(?=.*[!@#$%^&*()\-_+]).+)$/;

        if (!passwordPattern.test(value)) {
          return helpers.error("any.invalid");
        }

        return value;
      })
      .messages({
        "string.pattern.base": "הסיסמה חייבת לכלול לפחות אות גדולה, אות קטנה, 4 מספרים ותו מיוחד (!@#$%^&*()_-+)",
      }),
    imgUrl: Joi.string().min(11).max(2048).allow(null, ''),
    isAdmin: Joi.boolean().truthy('true', true).falsy('false', false)
  });

  return schema.validate(user);
}

module.exports = validateRegistration;
