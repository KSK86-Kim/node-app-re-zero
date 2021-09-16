const { addContact } = require('../../service/contacts')

const add = async(req, res) => {
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
