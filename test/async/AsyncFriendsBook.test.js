/**
 * Created by mgab on 01/09/2017.
 */
import { expect } from 'chai'
import AsyncFriendsBook from '../../src/async/AsyncFriendsBook'

describe('AsyncFriendsBook', () => {
  it('should return user info using callbackHell', (done) => {
    AsyncFriendsBook.callbackHell().then((result) => {
      const expected = {
        user: { id: 1, name: 'Mihail Gaberov' },
        friends: [{ id: 1, name: 'Mihail Gaberov' }, { id: 1, name: 'Mihail Gaberov' }, {
          id: 1,
          name: 'Mihail Gaberov'
        }],
        pic: 'not a real photo'
      }


      expect(result).to.be.equal(expected)
      done()
    })
      .catch((done) => {
      console.log(done)
      })
  })
})