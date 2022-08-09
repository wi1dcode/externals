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
    
    try {
        const responseId = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
            )
        const pokeId = Number(id)
        res.json(responseId.data)
    } catch (error) {
        res.status(error.response.status).send(error.response.data)
    }
})


module.exports = app
