import fs from 'fs'
/* import something from '../../files/data.json'
 */
const readData = (): object => {
  const data = fs.readFileSync('C:/Users/formacio/Sprint4_Ex2_Nivell1/files/data.json')
  const users = JSON.parse(data.toString())
  return users
}

export default readData
