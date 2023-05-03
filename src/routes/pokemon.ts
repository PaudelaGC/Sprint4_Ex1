import express from 'express'
import axios from 'axios'

const router = express.Router()

/**
 * Retrieves information from the pokeapi based on the id provided
 */
router.get('/:id', (req, res) => {
  const id = req.params.id
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => {
    const data = []
    data.push(`name: ${resp.data.name as string}`)
    data.push(`height: ${resp.data.height as string}`)
    data.push(`weight: ${resp.data.weight as string}`)
    res.status(200).send(data)
    console.log(`data retrieved from https://pokeapi.co/api/v2/pokemon/${id}`)
  }).catch((err) => console.log(err))
})

export default router
