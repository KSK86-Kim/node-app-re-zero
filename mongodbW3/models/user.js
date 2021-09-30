const { Schema, model } = require('mongoose')
const bCrypt = require('bcryptjs')
const Joi = require('Joi')
const gravatar = require('gravatar')
const { v4 } = require('uuid')

const { emailRegexp } = require('../../utils/regulars')

const userSchema = Schema(
  {
    password: {
      trim: true,
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      trim: true,
      match: [emailRegexp, 'Please fill a valid email address'],
      required: [true, 'Set email for contact'],
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: function () {
        return gravatar.url(this.email, { s: '250' }, true)
      }
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
)

userSchema.methods.setPassword = function(password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6))
}
userSchema.methods.validPassword = function(password) {
  return bCrypt.compareSync(password, this.password)
}
userSchema.methods.createVerifyToken = function() {
  this.verifyToken = v4()
}
const UserModel = model('user', userSchema)

const joiNewUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().required(),
})

const joiUpdatePasswordUserSchema = Joi.object({
  password: Joi.string().required()
})

const joiUpdateSubscriptiUserSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
})

const joiRepeatedVerifySchema = Joi.object({
  email: Joi.string().email().required(),
})

module.exports = {
  UserModel,
  joiNewUserSchema,
  joiUpdatePasswordUserSchema,
  joiUpdateSubscriptiUserSchema,
  joiRepeatedVerifySchema
}
