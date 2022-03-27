
class PhoneBookModel {
  constructor() {
     this.phone_records = new Map();
     this.isLast = false;
  }

  async setLast () {
      this.isLast = true;
  }
  async isLast () {
    return this.isLast;
}
}

module.exports = PhoneBookModel;
