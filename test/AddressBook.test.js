/**
 * Created by mgab on 19/07/2017.
 */
import { expect } from 'chai'
import AddressBook from '../src/AddressBook'
import Contact from '../src/Contact'
import data from '../mocks/contact.json'

describe('Address book', () => {
  let addressBook, contact

  beforeEach(() => {
    addressBook = new AddressBook()
    contact = new Contact(data)
  })

  it('should be able to add a contact', () => {
    addressBook.addContact(contact)
    expect(addressBook.getContact(0)).to.be.equal(contact)
  })

  it('should be able to delete contact', () => {
    addressBook.addContact(contact)
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