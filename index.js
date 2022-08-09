const express = require('express')
const app = express()
const port = 5000
const axios = require('axios')
const gameOfThrones = require('./routes/gameOfThrones')

app.get('/', (req, res) => {
  res.send('Externals API')
})

app.use('/game-of-thrones', gameOfThrones)


app.listen(port, () => {
  console.log(`Server running on ${port}`)
})