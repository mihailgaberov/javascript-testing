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

  deleteContact(index) {
    this.contacts.splice(index, 1)
  }

  getInitialContacts(cb) {
    setTimeout(() => {
      this.initialComplete = true
      if (cb) {
        return cb()
      }
    }, 500)
  }
}

export default AddressBook