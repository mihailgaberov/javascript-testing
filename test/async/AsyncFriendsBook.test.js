/**
 * Created by mgab on 01/09/2017.
 */
import expect  from 'mocha'
import AsyncFriendsBook from '../../src/async/AsyncFriendsBook'

describe('AsyncFriendsBook', () => {
  it('should test callback hell using done()', (done) => {
    const expected = AsyncFriendsBook.callbackHell()
    expect(expected).to.be.equal({})
    done()
  })
})