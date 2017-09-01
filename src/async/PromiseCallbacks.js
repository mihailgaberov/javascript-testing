/**
 * Created by mgab on 01/09/2017.
 */
function callbackHell() {
  const api = new Api()
  let user, friends
  api.getUser().then(function (returnedUser) {
    user = returnedUser
    api.getFriends(user.id).then(function (returnedFriends) {
      friends = returnedFriends
      api.getPhoto(user.id).then(function (photo) {
        console.log('callbackHell', { user, friends, photo })
      })
    })
  })
}