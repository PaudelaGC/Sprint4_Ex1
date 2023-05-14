import fs from 'fs'

const updateData = (newData: object): any => {
  const data = JSON.stringify(newData)
  fs.writeFileSync('C:/Users/Mi Pc/Server/Sprint4_Ex1/files/data.json', data)
}

export default updateData
