const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
const { findById } = require('../mongodbW3/service/users')

require('dotenv').config()
const { SECRET_KEY } = process.env

const params = {
  secretOrKey: SECRET_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

passport.use(
  new Strategy(params, async ({ id }, done) => {
    try {
      const user = await findById(id)

      if (!user) {
        return done(new Error('User not found'))
      }
      if (!user.token) {
        return done(null, false)
      }
      return done(null, user)
    } catch (error) {
      done(error)
    }
  })
)
