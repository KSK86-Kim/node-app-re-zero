const mongoose = require('mongoose')
const { app, REQUESTS } = require('../app')

require('dotenv').config()

const { DB_KEY, PORT = 9000 } = process.env

const optionDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose
  .connect(DB_KEY, optionDB)
  .then(() => {
    console.log('Database connection successful')

    app.listen(PORT)
    console.log(`Server running. Use our API on port: ${PORT}`)

    if (app.get('env') === 'development') {
      console.table(REQUESTS)
    }
  }).catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`)
    process.exit(1)
  })
