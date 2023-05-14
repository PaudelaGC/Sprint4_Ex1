import express from 'express'
import readData from '../middlewares/readData'

const router = express.Router()

router.get('/', (_req, res) => {
  const ranking = getRankings()
  const total = ranking[ranking.length - 1] as number
  ranking.splice(ranking.length - 1, 1)
  ranking.push(`The average winrate is ${(total / ranking.length).toFixed(2)}%`)
  res.status(200).json(ranking)
})

router.get('/winner', (_req, res) => {
  const ranking = getRankings()
  ranking.splice(ranking.length - 1, 1)
  const winner = ranking[0] as any
  console.log(`The current winner is ${winner.name as string} with a winrate of ${winner.winrate as string}`)
  res.status(200).json(winner)
})

router.get('/loser', (_req, res) => {
  const ranking = getRankings()
  ranking.splice(ranking.length - 1, 1)
  const loser = ranking[ranking.length - 1] as any
  console.log(`The current loser is ${loser.name as string} with a winrate of ${loser.winrate as string}`)
  res.status(200).json(loser)
})

function compareRanks (a: any, b: any): number {
  if (parseFloat(b.winrate) < parseFloat(a.winrate)) {
    return -1
  }
  if (parseFloat(b.winrate) > parseFloat(a.winrate)) {
    return 1
  }
  return 0
}

function getRankings (): Object[] {
  let position = 0
  const data = readData() as any[]
  const ranking = []
  let total = 0
  for (let i = 0; i < data.length; i++) {
    const rank = data[i].winrate
    const fixedRank = parseFloat(rank.slice(0, -1))
    const player = {
      place: 0,
      name: data[i].name,
      winrate: `${fixedRank.toFixed(2)}%`
    }
    ranking.push(player)
  }
  ranking.sort(compareRanks)
  for (let i = 0; i < ranking.length; i++) {
    position++
    ranking[i].place = position
    total = (total + parseFloat(ranking[i].winrate.slice(0, -1)))
  }
  ranking.push(total)
  return ranking
}

export default router
