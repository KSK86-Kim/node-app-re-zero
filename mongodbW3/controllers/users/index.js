const reg = require('./reg')
const login = require('./login')
const logout = require('./logout')
const current = require('./current')
const updateSubscription = require('./updateSubscription')
const updateImg = require('./updateImg')
const verify = require('./verify')
const repeatedVerify = require('./repeatedVerify')

module.exports = {
  reg,
  login,
  logout,
  current,
  updateSubscription,
  updateImg,
  verify,
  repeatedVerify
}
