const test = async(req, res, next) => {
  console.log(req)
  res.json({
    baseUrl: req.baseUrl,
    url: req.url,
    originalUrl: req.originalUrl,
    method: req.method,
    params: req.params,
    body: req.body,
    query: req.query,
  })
}

module.exports = test
