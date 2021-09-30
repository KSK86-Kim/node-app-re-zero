const { UserModel } = require('../../models/user')
const { sendMail } = require('../../../utils')
require('dotenv').config()

const { HOST_SERVER } = process.env

const findById = (id) => {
  return UserModel.findById(id)
}

const findOne = (filter) => {
  return UserModel.findOne(filter)
}

const create = async({ password, ...other }) => {
  const { email } = other
  try {
    const newUser = new UserModel(other)

    newUser.setPassword(password)
    newUser.createVerifyToken()

    const htmlEmail = `
    <p>Welcome to System Contacts! We're very excited to have you on board.
    <br> To get started with System Contacts, please click here: 
    <button><a href="${HOST_SERVER}api/v2/users/verify/${newUser.verifyToken}">link</a></button></p>`

    const newEmail = {
      to: email,
      subject: 'Registration on the website',
      html: htmlEmail
    }

    await sendMail(newEmail)
    return newUser.save()
  } catch (error) {
    throw error.message
  }
}

const update = (id, body) => {
  return UserModel.findByIdAndUpdate(id, body, { new: true, })
}

const updateToken = (id, token) => {
  return UserModel.findByIdAndUpdate(id, { token }, { new: true, })
}

module.exports = {
  findById,
  findOne,
  create,
  update,
  updateToken,
}
