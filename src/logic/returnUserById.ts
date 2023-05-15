import readData from './readData'

const returnUserById = (id: number): any => {
  const data = readData() as any[]
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i]
    }
  }
  return null
}

export default returnUserById
