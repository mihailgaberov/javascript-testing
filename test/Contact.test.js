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


})