const { addContact } = require('../../service/contacts')

const add = async(req, res, _, joiSchema) => {
  const { error } = joiSchema.validate(req.body)
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      messge: error.message
    })
  }
  const { favorite } = req.body
  const data = favorite ? req.body : { ...req.body, favorite: false }
  const newContact = await addContact(data)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newContact,
    },
  })
}

module.exports = add
