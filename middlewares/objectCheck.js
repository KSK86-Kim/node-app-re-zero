const objectCheck = () => {
  return async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'missing refreshable object',
      })
    }
    next()
  }
}

module.exports = objectCheck
