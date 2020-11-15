/* eslint-disable max-len */
import { CustomNodeJSGlobal } from '../custom/global'
import { IPattern } from '../interfaces/pattern'
import { documentType } from '../constants/constants'

declare const global: CustomNodeJSGlobal

class User {
  private static _collectionRef = global.firestoreDB.collection('users')

  public static process (
    process: string,
    args   : IPattern
  ):
    | Promise<
        FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
      >
    | undefined {
    switch (process) {
      case 'save':
        return this._saveUser(args)
      default:
        return undefined
    }
  }

  private static async _saveUser (args: IPattern): Promise<
    FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
  > {
    try {
      const result = await this._collectionRef.add({
        condition     : args.type === 'Docente' ? 'teacher': 'student',
        documentNumber: args.documentNumber,
        documentType  : documentType[args.documentType],
        faculty       : args.faculty,
        lastName      : args.lastName,
        mail          : args.mail,
        names         : args.names,
        optionalMail  : args.optionalMail,
        secondLastName: args.secondLastName,
        specialty     : args.specialty,
        // eslint-disable-next-line sort-keys-fix/sort-keys-fix
        UNICode       : args.UNICode
      })

      return result
    } catch (error) {
      console.error(error)
      throw new Error('Something happen')
    }
  }
}

export { User }
