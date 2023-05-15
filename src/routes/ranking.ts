import express from 'express'
import readData from '../logic/readData'
import getRankings from '../logic/getRankings' 

const router = express.Router()

router.get('/', (_req, res) => {
  const data = readData() as any[]
  const ranking = getRankings(data)
  const total = ranking[ranking.length - 1] as number
  ranking.splice(ranking.length - 1, 1)
  ranking.push(`The average winrate is ${(total / ranking.length).toFixed(2)}%`)
  res.status(200).json(ranking)
})

router.get('/winner', (_req, res) => {
  const data = readData() as any[]
  const ranking = getRankings(data)
  ranking.splice(ranking.length - 1, 1)
  const winner = ranking[0] as any
  console.log(`The current winner is ${winner.name as string} with a winrate of ${winner.winrate as string}`)
  res.status(200).json(winner)
})

router.get('/loser', (_req, res) => {
  const data = readData() as any[]
  const ranking = getRankings(data)
  ranking.splice(ranking.length - 1, 1)
  const loser = ranking[ranking.length - 1] as any
  console.log(`The current loser is ${loser.name as string} with a winrate of ${loser.winrate as string}`)
  res.status(200).json(loser)
})

export default router
