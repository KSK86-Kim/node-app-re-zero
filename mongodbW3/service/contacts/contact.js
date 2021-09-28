const { ContactModel } = require('../../models')

const addContact = (userId, body) => {
  return ContactModel.create({ ...body, owner: userId })
}
const listContacts = async (userId, { limit = 20, page = 1, favorite }) => {
  const { docs: contacts, totalDocs: total } = await ContactModel.paginate(
    { owner: userId, favorite: favorite || { $in: [true, false] } },
    {
      limit,
      page,
      populate: {
        path: 'owner',
        select: 'email',
      },
    }
  )

  return {
    contacts,
    total,
    limit,
    page,
  }
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

// const removeContact = async(userId, contactId) => {
//   try {
//     return ContactModel.findOneAndRemove({ _id: contactId, owner: userId })
//   } catch (error) {
//     if (error.message.includes('Cast to ObjectId')) {
//       return null
//     }
//     throw error
//   }
// }
const removeContact = async({ userId, contactId }) => {
  return await ContactModel.findOneAndRemove({ _id: contactId, owner: userId })
}

const updateContactById = async({ userId, contactId, upInfo }) => {
  try {
    // return await ContactModel.findByIdAndUpdate(
    //   contactId,
    //   data,
    //   { new: true, }
    // )
    return await ContactModel.findOneAndUpdate(
      { _id: contactId, owner: userId },
      upInfo,
      { new: true, }).populate({
      path: 'owner',
      select: 'email'
    })
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
