import Api from '../API/api'

export default class AsyncFriendsBook {

  static callbackHell() {
    const api = new Api()
    let user, friends

    return api.getUser().then(function (returnedUser) {
      user = returnedUser
      api.getFriends(user.id).then(function (returnedFriends) {
        friends = returnedFriends
        api.getPhoto(user.id).then(function (photo) {
           return { user, friends, photo }
        })
      })
    })
  }

  static promiseChain() {
    const api = new Api()
    let user, friends
    api.getUser()
      .then((returnedUser) => {
        user = returnedUser
        return api.getFriends(user.id)
      })
      .then((returnedFriends) => {
        friends = returnedFriends
        return api.getPhoto(user.id)
      })
      .then((photo) => {
        console.log('promiseChain', { user, friends, photo })
        return { user, friends, photo }
      })
  }

  static async asyncAwaitIsYourNewBestFriend() {
    const api = new Api()
    const user = await api.getUser()
    const friends = await api.getFriends(user.id)
    const photo = await api.getPhoto(user.id)
    console.log('asyncAwaitIsYourNewBestFriend', { user, friends, photo })
    return { user, friends, photo }
  }
}