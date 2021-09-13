const Joi = require('joi')

const contactSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  phone: Joi.string().min(7).required()

})

const putContactSchema = Joi.object({
  name: Joi.string().min(2).max(30).optional(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).optional(),
  phone: Joi.string().min(7).optional()

})

module.exports = { contactSchema, putContactSchema }
