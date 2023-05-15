function getRankings (data: any[]): Object[] {
    let position = 0
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

  
function compareRanks (a: any, b: any): number {
    if (parseFloat(b.winrate) < parseFloat(a.winrate)) {
      return -1
    }
    if (parseFloat(b.winrate) > parseFloat(a.winrate)) {
      return 1
    }
    return 0
  }

 export default getRankings