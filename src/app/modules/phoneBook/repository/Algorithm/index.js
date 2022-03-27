const PhoneBook= require("./phoneBook");

class phoneBook {
    constructor() {
       this.phone_record = new PhoneBook().phone_records;
    }
  
    async addPhoneRecord (data) {
        // check if no data was passed

        if(!Object.keys(data)) {
            console.log("data not passed")
        }
        // check if record exists
        if(this.phone_record.has(Object.keys(data))){
          console.log("Phone Number Already Stored..");
          return;
        }
        this.phone_record.set(Object.keys(data), data[Object.keys(data)]);
    }
    async getPhoneDetails (phone_number) {
      console.log("PHONE_NUMBER: ", phone_number);
      if(this.phone_record.get(phone_number) === 'undefined'){
        console.log("Phone Number does not Exist..")
      }
      return this.phone_record.get(String(phone_number))
  }

   async listPhoneNumbers () {
      return this.phone_record.keys();
}
  }
  
  module.exports = phoneBook;
  