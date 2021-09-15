const { Schema, model } = require('mongoose')
const Joi = require('joi')

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    required: [true, 'Set email for contact'],
  },
  phone: {
    type: String,
    required: [true, 'Set phone for contact'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },

}, { versionKey: false, timestamps: true })

const ContactModel = model('contact', contactSchema)

const joiContactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().required(),
  phone: Joi.string().min(7).required(),
  favorite: Joi.boolean().optional(),
})

const joiUpdateContactSchema = Joi.object({
  name: Joi.string().min(2).optional(),
  email: Joi.string().optional(),
  phone: Joi.string().min(7).optional(),
  favorite: Joi.boolean().optional(),
})

const joiUpdateStatusContactSchema = Joi.object({
  favorite: Joi.boolean().required()
})

// const allJoiContactSchema = {
//   joiContactSchema,
//   joiUpdateContactSchema,
//   joiUpdateStatusContactSchema
// }

module.exports = {
  ContactModel,
  joiContactSchema,
  joiUpdateContactSchema,
  joiUpdateStatusContactSchema,
//   allJoiContactSchema
}
