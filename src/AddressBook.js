/**
 * Created by mgab on 19/07/2017.
 */
class AddressBook {
  constructor() {
    this.initialComplete = false
    this.contacts = []
  }

  addContact(contact) {
    this.contacts.push(contact)
  }

  getContact(index) {
    return this.contacts[index]
  }


}

export default AddressBook