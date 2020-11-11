export class CliOptions {
  format           : string
  hideCursor       : boolean
  synchronousUpdate: boolean

  constructor (
    format           : string,
    hideCursor       : boolean,
    synchronousUpdate: boolean
  ) {
    this.format = format
    this.hideCursor = hideCursor
    this.synchronousUpdate = synchronousUpdate
  }
}
