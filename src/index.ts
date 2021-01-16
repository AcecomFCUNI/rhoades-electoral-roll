/* eslint-disable no-await-in-loop */
import colors from 'colors'
import cliProgress from 'cli-progress'
import { firebaseConnection } from './database/firebase'
import { CliOptions, csvReader } from './utils/index'
import { User } from './controllers/user'

const options = new CliOptions(
  `${colors.bold('Upload electoral roll process')} ${colors.cyan(
    '[{bar}]'
  )} ${colors.blue('{percentage}%')} | ${colors.bold(
    'Current user:'
  )} ${colors.yellow('{value}')} | ${colors.bold('Duration:')} ${colors.green(
    '{duration_formatted}'
  )}`,
  true,
  true
)

const readCsv = async (): Promise<void> => {
  const bar = new cliProgress.SingleBar(
    options,
    cliProgress.Presets.shades_classic
  )
  let i = 0

  try {
    const pattern = await csvReader('pattern_2020-1-v1.csv')
    bar.start(pattern.length + 1, i)

    await Promise.all(pattern.map((patterMember, index) => {
      i = index
      bar.update(i + 1)

      return User.process('save', patterMember)
    }))

    bar.update(i + 1)

    // for (let i = 0; i < pattern.length; i++)
    //   try {
    //     await User.process('save', pattern[i])
    //     bar.update(i + 1)
    //   } catch (error) {
    //     console.error(error)
    //     console.log(`At row: ${i + 2}`)
    //   }

    bar.stop()
  } catch (error) {
    console.error(error)
    console.log(`At row: ${i + 2}`)
  }
}

firebaseConnection()
readCsv()
