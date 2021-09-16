const contactPath = require('../../ContactPathJson')
const fs = require('fs').promises

async function listContacts() {
  const data = await fs.readFile(contactPath, 'utf-8')
  const contacts = JSON.parse(data)
  return contacts
}

module.exports = listContacts
