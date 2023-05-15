import fs from 'fs'

const readData = (): object => {
  const data = fs.readFileSync('C:/Users/formacio/Sprint4_Ex2_Nivell1/Sprint4_Ex1/files/data.json')
  const users = JSON.parse(data.toString())
  return users
}

export default readData
