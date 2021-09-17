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

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const errMessageName = 'Name is required and must contain at least two letters'
const errMessageFavorite = 'Favorite required like a false or true'

const joiNewContactSchema = Joi.object({
  name: Joi.string().min(2).required().error(new Error(errMessageName)),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().optional(),
})

const joiUpdateContactSchema = Joi.object({
  name: Joi.string().min(2).required().error(new Error(errMessageName)),
  email: Joi.string().pattern(emailRegexp).optional(),
  phone: Joi.string().optional(),
  favorite: Joi.boolean().optional(),
})

const joiUpdateStatusContactSchema = Joi.object({
  favorite: Joi.boolean().required().error(new Error(errMessageFavorite))
})

// const allJoiContactSchema = {
//   joiContactSchema,
//   joiUpdateContactSchema,
//   joiUpdateStatusContactSchema
// }

module.exports = {
  ContactModel,
  joiNewContactSchema,
  joiUpdateContactSchema,
  joiUpdateStatusContactSchema,
//   allJoiContactSchema
}
