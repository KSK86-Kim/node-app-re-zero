// const createError = require('http-errors')
const { NotFound } = require('http-errors')
// https://www.npmjs.com/package/http-errors

const testId = async(req, res) => {
  const { id } = req.params
  if (id !== '1') {
    console.log('asd')

    // const error = createError(404, 'Not foundasdasdasd')
    // throw error

    // throw new createError(404, 'Not foundasdasdasd')

    // throw new createError.NotFound('Not foundasdasdasd')

    throw new NotFound('Not foundasdasdasd')
  }
  res.json({
    baseUrl: req.baseUrl,
    url: req.url,
    originalUrl: req.originalUrl,
    method: req.method,
    params: req.params,
    paramsId: req.params.id,
    body: req.body,
    query: req.query
    // joi: joi
    // joiError: error.message
  })
}

module.exports = testId
