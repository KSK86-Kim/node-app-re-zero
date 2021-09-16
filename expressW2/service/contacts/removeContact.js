const listContacts = require('./listContacts')
const updateContacts = require('./writeUpdate')

async function removeContact(contactID) {
  try {
    const contacts = await listContacts()
    const index = contacts.findIndex((contact) => contact.id === contactID)

    if (index === -1) {
      return null
    }

    const delContact = contacts.filter((item) => item.id === contactID)
    const filteredContacts = contacts.filter((item) => item.id !== contactID)
    await updateContacts(filteredContacts)
    return delContact
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = removeContact
