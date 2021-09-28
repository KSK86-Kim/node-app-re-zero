const { UserModel } = require('../../models/user')

const findById = (id) => {
  return UserModel.findById(id)
}

const findOne = (filter) => {
  return UserModel.findOne(filter)
}

const create = ({ password, ...other }) => {
  const newUser = new UserModel(other)
  newUser.setPassword(password)
  return newUser.save()
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
