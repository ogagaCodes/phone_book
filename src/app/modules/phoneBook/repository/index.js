const { listPhoneRecords } = require("../../../_helpers/listPhoneRecords");
const { savePhoneRecord } = require("../../../_helpers/savePhoneRecords");


class PhoneBookRepository {
  constructor(phoneData, phoneNumber) {
     this.phoneData = phoneData;
     this.phoneNumber = phoneNumber;
  }
  async save() {

   return await savePhoneRecord(this.phoneData);
  }
  async listPhoneRecords() {
  return await listPhoneRecords();
}

//  phoneBook = new PhoneBookModel()

}

module.exports = PhoneBookRepository;
