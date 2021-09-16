const test = async(req, res, next) => {
  // console.log(req)
  // console.log(typeof joi)

  // const { error } = joi.validate(req.body)

  res.json({
    baseUrl: req.baseUrl,
    url: req.url,
    originalUrl: req.originalUrl,
    method: req.method,
    params: req.params,
    body: req.body,
    query: req.query,
    // joi: joi
    // joiError: error.message
  })
}

module.exports = test
