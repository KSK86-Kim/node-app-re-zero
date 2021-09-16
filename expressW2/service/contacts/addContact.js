const { v4 } = require('uuid')
const listContacts = require('./listContacts')
const writeUpdate = require('./writeUpdate')

async function addContact(data) {
  const id = v4()
  const dataCreat = new Date()
  const newContact = { id, ...data, dataCreat }

  const contacts = await listContacts()

  // const newContacts = [...contacts, newContact]
  contacts.push(newContact)

  // const newContactStr = JSON.stringify(newContacts)
  // await fs.writeFile(contactPath, newContactStr)
  await writeUpdate(contacts)

  return newContact
}

module.exports = addContact
