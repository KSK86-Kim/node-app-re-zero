const fs = require('fs').promises
const contactPath = require('../../ContactPathJson')

const updateContacts = async (contacts) => {
  const contactsString = JSON.stringify(contacts)
  await fs.writeFile(contactPath, contactsString)
}

module.exports = updateContacts
