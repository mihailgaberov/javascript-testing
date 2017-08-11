/**
 * Created by mgab on 19/07/2017.
 */
class Contact {
  constructor(data) {
    this.name = data.name
    this.email = data.email
    this.phone = data.phone
  }


  getName() {
    return this.name
  }

  getEmail() {
    return this.email
  }

  getPhone() {
    return this.phone
  }
}

export default Contact