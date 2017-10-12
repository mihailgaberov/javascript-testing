import { expect } from 'chai'
import 'babel-polyfill';

import AsyncFriendsBook from '../../src/async/AsyncFriendsBook'

describe('AsyncFriendsBook', () => {
  it('should return user info using callbackHell - done()', (done) => {
    AsyncFriendsBook.callbackHell().then((result) => {
      const expected = {
        user: {id: 1, name: 'Mihail Gaberov'},
        friends: [
          {id: 1, name: 'Mihail Gaberov'},
          {id: 1, name: 'Mihail Gaberov'},
          {id: 1, name: 'Mihail Gaberov'}
        ],
        pic: 'not a real photo'
      }
      expect(result).to.deep.equal(expected)
      done()
    })
  })

  it('should return user info using callbackHell - returned promises', () => {
    return AsyncFriendsBook.callbackHell().then((result) => {
      const expected = {
        user: {id: 1, name: 'Mihail Gaberov'},
        friends: [
          {id: 1, name: 'Mihail Gaberov'},
          {id: 1, name: 'Mihail Gaberov'},
          {id: 1, name: 'Mihail Gaberov'}
        ],
        pic: 'not a real photo'
      }
      expect(result).to.deep.equal(expected)
    })
  })

  it('should return user info using promiseChain - done()', (done) => {
    AsyncFriendsBook.promiseChain().then((result) => {
      const expected = {
        user: {id: 1, name: 'Mihail Gaberov'},
        friends: [
          {id: 1, name: 'Mihail Gaberov'},
          {id: 1, name: 'Mihail Gaberov'},
          {id: 1, name: 'Mihail Gaberov'}
        ],
        photo: 'not a real photo'
      }
      expect(result).to.deep.equal(expected)
      done()
    })
  })

  it('should return user info using promiseChain - returned promise', () => {
    return AsyncFriendsBook.promiseChain().then((result) => {
      const expected = {
        user: {id: 1, name: 'Mihail Gaberov'},
        friends: [
          {id: 1, name: 'Mihail Gaberov'},
          {id: 1, name: 'Mihail Gaberov'},
          {id: 1, name: 'Mihail Gaberov'}
        ],
        photo: 'not a real photo'
      }
      expect(result).to.deep.equal(expected)
    })
  })

  it('should return user info using asyncAwaitIsYourNewBestFriend', async() => {
    const expected = {
      user: {id: 1, name: 'Mihail Gaberov'},
      friends: [
        {id: 1, name: 'Mihail Gaberov'},
        {id: 1, name: 'Mihail Gaberov'},
        {id: 1, name: 'Mihail Gaberov'}
      ],
      photo: 'not a real photo'
    }
    const result = await AsyncFriendsBook.asyncAwaitIsYourNewBestFriend()
    expect(result).to.deep.equal(expected)
  })
})