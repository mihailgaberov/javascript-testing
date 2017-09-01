/**
 * Created by mgab on 01/09/2017.
 */
async function asyncAwaitIsYourNewBestFriend() {
  const api = new Api()
  const user = await api.getUser()
  const friends = await api.getFriends(user.id)
  const photo = await api.getPhoto(user.id)
  console.log('asyncAwaitIsYourNewBestFriend', { user, friends, photo })
}