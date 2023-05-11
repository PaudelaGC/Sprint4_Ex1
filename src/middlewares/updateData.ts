import fs from 'fs'

const updateData = (newData: object): any => {
  const data = JSON.stringify(newData)
  fs.writeFileSync('C:/Users/formacio/Sprint4_Ex2_Nivell1/files/data.json', data)
}

export default updateData
