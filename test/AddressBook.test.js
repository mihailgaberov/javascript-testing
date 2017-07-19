/**
 * Created by mgab on 19/07/2017.
 */
import { expect } from 'chai'
import AddressBook from '../src/AddressBook'
import Contact from '../src/Contact'

describe('Address book', () => {
  let addressBook,
      thisContact

  beforeEach(() => {
    addressBook = new AddressBook()
    thisContact = new Contact()
  })

  it('should be able to add a contact', () => {
    addressBook.addContact(thisContact)
    expect(addressBook.getContact(0)).to.be.equal(thisContact)
  })
})