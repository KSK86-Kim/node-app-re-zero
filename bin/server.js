const { app, REQUESTS } = require('../app')

const { PORT = 9000 } = process.env // Моя любимая цифра

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
  if (app.get('env') === 'development') {
    console.table(REQUESTS)
  }
})
