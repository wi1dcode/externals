const express = require('express')
const app = express()
const axios = require('axios')


app.get('/', async (req, res) => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    )
  
    res.json(response.data)
})


app.get('/:id', async (req, res) => {
    const { id } = req.params
    const responseId = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
        )
    const pokeId = Number(id)
      
    if (pokeId) {
        res.json(responseId.data)
    } else {
        res.status(404).send('Not Found')
    }
})


module.exports = app
