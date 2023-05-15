import readData from './readData'

const highestId = (): number => {
  const data = readData() as any[]
  const lastId = data[data.length - 1].id
  return lastId
}

export default highestId
