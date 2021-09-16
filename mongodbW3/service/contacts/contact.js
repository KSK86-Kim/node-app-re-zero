const { ContactModel } = require('../../models')

const addContact = (body) => {
  return ContactModel.create({ ...body })
}
const listContacts = async() => {
  return ContactModel.find({})
}
const getContactById = async(contactId) => {
  try {
    return await ContactModel.findOne({ _id: contactId })
  } catch (error) {
    return null
  }
}

const removeContact = async(contactId) => {
  try {
    return await ContactModel.findOneAndRemove({ _id: contactId })
  } catch (error) {
    return null
  }
}

const updateContactById = async(contactId, data) => {
  try {
    return await ContactModel.findByIdAndUpdate(
      contactId,
      data,
      { new: true, }
    )
  } catch (error) {
    return null
  }
}

module.exports = {
  addContact,
  listContacts,
  getContactById,
  removeContact,
  updateContactById,
}
