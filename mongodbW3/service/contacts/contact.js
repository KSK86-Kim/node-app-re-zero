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
    // return await ContactModel.findById(contactId)
  } catch (error) {
    if (error.message.includes('Cast to ObjectId')) {
      return null
    }
    throw error
  }
}

const removeContact = async(contactId) => {
  try {
    return await ContactModel.findOneAndRemove({ _id: contactId })
    // return await ContactModel.findByIdAndDelete(contactId)
  } catch (error) {
    if (error.message.includes('Cast to ObjectId')) {
      return null
    }
    throw error
  }
}

const updateContactById = async(contactId, data) => {
  try {
    // return await ContactModel.findByIdAndUpdate(
    //   contactId,
    //   data,
    //   { new: true, }
    // )
    return await ContactModel.findOneAndUpdate(
      { _id: contactId },
      data,
      { new: true, })
  } catch (error) {
    if (error.message.includes('Cast to ObjectId')) {
      return null
    }
    throw error
  }
}

module.exports = {
  addContact,
  listContacts,
  getContactById,
  removeContact,
  updateContactById,
}
