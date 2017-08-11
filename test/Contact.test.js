/**
 * Created by mgab on 11/08/2017.
 */
import { expect } from 'chai'
import Contact from '../src/Contact'
import data from '../mocks/contact.json'

describe('Contact', () => {

  let contact = new Contact(data)

  it('should have name', () => {
    expect(contact.name).to.be.equal('Mihail Gaberov')
  })

  it('should have email', () => {
    expect(contact.email).to.be.equal('mihail.gaberov@gmail.com')
  })

  it('should have phone number', () => {
    expect(contact.phone).to.be.equal(666777888)
  })

  it('name should be string', () => {
    expect(contact.name).to.be.a('string')
  })

  it('email should be string', () => {
    expect(contact.email).to.be.a('string')
  })

  it('phone should be number', () => {
    expect(contact.phone).to.be.a('number')
  })

  it('should have method for getting the name', () => {
    expect(contact.getName()).to.be.equal('Mihail Gaberov')
  })

  it('should have method for getting the email', () => {
    expect(contact.getEmail()).to.be.equal('mihail.gaberov@gmail.com')
  })

  it('should have method for getting the phone', () => {
    expect(contact.getPhone()).to.be.equal(666777888)
  })
})