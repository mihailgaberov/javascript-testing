/**
 * Created by mgab on 31/08/2017.
 */
export default class Api {
  constructor() {
    this.user = { id: 1, name: 'Mihail Gaberov' }
    this.friends = [this.user, this.user, this.user]
    this.photo = 'not a real photo'
  }

  getUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.user), 200)
    })
  }

  getFriends(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.friends.slice()), 200)
    })
  }

  getPhoto(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.photo), 200)
    })
  }

  throwError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Intentional Error')), 200)
    })
  }
}