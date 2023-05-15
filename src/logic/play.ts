
function play(player: any): any {
    let won = false
  let wins = 0
  const dice1 = getRandomIntInclusive(1, 6)
  console.log('First dice thrown: ', dice1)
  const dice2 = getRandomIntInclusive(1, 6)
  console.log('Second dice thrown: ', dice2)
  const result = dice1 + dice2
  if (result === 7) {
    won = true
    console.log('You won!')
  } else {
    console.log('You lost!')
  }
  const game = {
    dice1,
    dice2,
    won
  }
  player.results.push(game)
  for (let i = 0; i < player.results.length; i++) {
    if (player.results[i].won === true) {
      wins += 1
    }
  }
  player.winrate = `${(
    (wins / parseFloat(player.results.length)) *
    100
  ).toFixed(2)}%`
  console.log('Your current winrate is: ', player.winrate)
  return player
}

function getRandomIntInclusive (min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  export default play