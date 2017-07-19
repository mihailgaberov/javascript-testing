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

  it('should be able to delete contact', () => {
    addressBook.addContact(thisContact)
    addressBook.deleteContact(0)

    expect(addressBook.getContact(0)).to.be.undefined
  })
})

describe('Async Address book', () => {
  const addressBook = new AddressBook()

  beforeEach((done) => {
    addressBook.getInitialContacts(() => {
      done()
    })
  })

  it('should grab initial contracts', (done) => {
    expect(addressBook.initialComplete).to.be.equal(true)
    done()
  })
})