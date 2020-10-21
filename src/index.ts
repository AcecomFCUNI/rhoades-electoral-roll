import { firebaseConnection } from './database/firebase'
import { csvReader } from './utils/file'

const readCsv = async () => {
  try {
    const pattern = await csvReader('pattern_2020-1.csv')

    console.log(pattern)
  } catch (error) {
    console.error(error)
  }
}

firebaseConnection()
readCsv()
