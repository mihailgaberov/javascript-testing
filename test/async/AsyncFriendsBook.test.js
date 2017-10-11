/**
 * Created by mgab on 01/09/2017.
 */
import { expect } from 'chai'
import AsyncFriendsBook from '../../src/async/AsyncFriendsBook'

describe('AsyncFriendsBook', () => {
  it('should return user info using callbackHell', (done) => {
    AsyncFriendsBook.callbackHell().then((result) => {
      console.log('resultrs: ', result)

      expect(result).to.equal({
        user: { id: 1, name: 'Mihail Gaberov' },
        friends:
          [{ id: 1, name: 'Mihail Gaberov' },
            { id: 1, name: 'Mihail Gaberov' },
            { id: 1, name: 'Mihail Gaberov' }],
        photo: 'not a real photo'
      })
      done()
    })
      .catch(done)
  })
})