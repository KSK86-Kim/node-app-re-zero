const { listContacts } = require('../../service/contactsV1')

const getAllContacts = async (req, res, next) => {
  const contacts = await listContacts()
  res.json({
    contacts
  })
}

module.exports = getAllContacts
