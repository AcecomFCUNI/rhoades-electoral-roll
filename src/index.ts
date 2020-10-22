/* eslint-disable no-await-in-loop */
import { firebaseConnection } from './database/firebase'
import { csvReader } from './utils/file'
import { User } from './controllers/user'

const readCsv = async (): Promise<void> => {
  try {
    const pattern = await csvReader('pattern_2020-1.csv')
    for (let i = 0; i < pattern.length; i++)
      try {
        if (pattern[i].type === 'Docente')
          await User.process('save', 'teachers', pattern[i])
        else
          await User.process('save', 'students', pattern[i])

        console.log(`User: ${i}`)
      } catch (error) {
        console.error(error)
        console.log(`At row: ${i + 2}`)
      }

  } catch (error) {
    console.error(error)
  }
}

firebaseConnection()
readCsv()
