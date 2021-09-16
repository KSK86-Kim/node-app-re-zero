const listContacts = require('./listContacts')

const getContactById = async(contactId) => {
  const contacts = await listContacts()

  const requestedContact = await contacts.find(contact => contact.id === contactId)

  if (!requestedContact) throw new Error(`Contact with id: { ${contactId} } not foud`)
  return requestedContact
}

module.exports = getContactById
