/**
 * Created by mgab on 01/09/2017.
 */
function promiseChain() {
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
    })
}