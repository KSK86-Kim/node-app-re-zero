const { contactSchema } = require('../../validation/contact')
const { addContact } = require('../../service/contacts')

const add = async(req, res, next) => {
  const { error } = contactSchema.validate(req.body)
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: '400',
      messge: error.message
    })
  }

  const newContact = await addContact(req.body)
  res.status(201).json({
    newContact
  })
}

module.exports = add
