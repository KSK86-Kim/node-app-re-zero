const { Schema, model, SchemaTypes } = require('mongoose')
const Joi = require('joi')
const { emailRegexp } = require('../../utils/regulars')
const mongoosePaginate = require('mongoose-paginate-v2')

const contactSchema = Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 20,
    trim: true,
    required: [true, 'Set name for contact'],

  },
  email: {
    type: String,
    trim: true,
    match: [emailRegexp, 'Please fill a valid email address'],
    required: [true, 'Set email for contact'],
  },
  phone: {
    type: String,
    trim: true,
    required: [true, 'Set phone for contact'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
  },

}, { versionKey: false, timestamps: true })

contactSchema.plugin(mongoosePaginate)
const ContactModel = model('contact', contactSchema)

const errMessageName = 'Name is required and must contain at least two letters'
const errMessageFavorite = 'Favorite required like a false or true'

const joiNewContactSchema = Joi.object({
  name: Joi.string().min(2).max(20).required().error(new Error(errMessageName)),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().optional(),
})

const joiUpdateContactSchema = Joi.object({
  name: Joi.string().min(2).max(20).optional().error(new Error(errMessageName)),
  email: Joi.string().pattern(emailRegexp).optional(),
  phone: Joi.string().optional(),
  favorite: Joi.boolean().optional(),
})

const joiUpdateStatusContactSchema = Joi.object({
  favorite: Joi.boolean().required().error(new Error(errMessageFavorite))
})

module.exports = {
  ContactModel,
  joiNewContactSchema,
  joiUpdateContactSchema,
  joiUpdateStatusContactSchema,
}
