const { getContactById } = require('../../service/contacts')
const { BadRequest } = require('http-errors')

const getById = async(req, res, next) => {
  const { contactId } = req.params
  const contact = await getContactById(contactId)

  if (!contact) {
    // return res.status(404).json({
    //   status: 'error',
    //   code: 404,
    //   message: `Contact with id: { ${contactId} } not foud`
    // })

    throw new BadRequest(`Contact with id: { ${contactId} } not foud`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contact,
    },
  })
}

module.exports = getById
