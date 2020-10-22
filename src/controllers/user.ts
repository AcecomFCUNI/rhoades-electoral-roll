/* eslint-disable max-len */
import { CustomNodeJSGlobal } from '../custom/global'
import { IPattern } from '../interfaces/pattern'
import { documentType } from '../constants/constants'

declare const global: CustomNodeJSGlobal

class User {
  private static _collectionRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>

  public static process (
    process: string,
    type   : string,
    args   : IPattern
  ): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>> | undefined {
    switch (process) {
      case 'save':
        return this._saveUser(type, args)
      default:
        return undefined
    }
  }

  private static async _saveUser (
    collection: string,
    user      : IPattern
    ): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>> {
    this._collectionRef = global.firestoreDB.collection(collection)

    try {
      const result = await this._collectionRef.add({
        documentNumber: user.documentNumber,
        documentType  : documentType[user.documentType],
        faculty       : user.faculty,
        lastName      : user.lastName,
        mail          : user.mail,
        names         : user.names,
        optionalMail  : user.optionalMail,
        secondLastName: user.secondLastName,
        specialty     : user.specialty,
        // eslint-disable-next-line sort-keys-fix/sort-keys-fix
        UNICode       : user.UNICode
      })

      return result
    } catch (error) {
      console.error(error)
      throw new Error('Something happen')
    }
  }
}

export { User }
