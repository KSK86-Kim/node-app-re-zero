const listContacts = require('./listContacts')
const updateContacts = require('./writeUpdate')

async function update(contactId, updateInfo) {
  try {
    const contacts = await listContacts()
    const index = contacts.findIndex((contact) => contact.id === contactId)

    if (index === -1) {
      return null
    }

    contacts[index] = { ...contacts[index], ...updateInfo }

    await updateContacts(contacts)
    return contacts[index]
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = update
