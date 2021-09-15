const getAll = require('./getAll')
const getById = require('./getById')
const delById = require('./delById')
const add = require('./add')
const update = require('./update')
const partialUpdate = require('./partialUpdate')
const updateStatus = require('./updateStatus')
const test = require('./test')

module.exports = {
  getAll,
  getById,
  delById,
  add,
  update,
  partialUpdate,
  updateStatus,
  test
}
