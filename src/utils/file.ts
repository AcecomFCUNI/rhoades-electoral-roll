import csv from 'csv-parser'
import fs from 'fs'

import { IPattern } from '../interfaces/pattern'

const writeJson = (
  path   : string,
  json   : string,
  encrypt: string
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, json, encrypt, error => {
      if (error) reject(error)
      else resolve('Success')
    })
  })
}

const deleteFile = (path: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fs.unlink(path, error => {
      if (error) reject(error)
      else resolve('Success')
    })
  })
}

const csvReader = (path: string): Promise<IPattern[]> => {
  return new Promise(resolve => {
    const results: IPattern[] = []
      fs.createReadStream(`${__dirname}/../patterns/${path}`)
        .pipe(csv())
        .on('data', (data: IPattern) => results.push(data))
        .on('end', () => resolve(results))
  })
}

export { csvReader, deleteFile, writeJson }
