const express = require('express')
const app = express()
const axios = require('axios')
const got = require('../got.json')

app.get('/url', async (req, res) => {
  const response = await axios.get(
    'https://thronesapi.com/api/v2/Characters'
  )

  res.json(response.data)
})

app.get('/json', async (req, res) => {
    const response = got
    
    res.json(response)
  })


module.exports = app
