const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const removeContact = require('./removeContact')
const addContact = require('./addContact')
const updateContactById = require('./updateContactById')
const partialUpdateContactById = require('./partialUpdateContactById')

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
  partialUpdateContactById
}
