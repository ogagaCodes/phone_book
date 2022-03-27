const util = require('util');
const fs = require('fs');
const fs_readFile = util.promisify(fs.readFile);
const PhoneBook = require("./src/app/modules/phoneBook/repository/Algorithm");



(async () => {
    try {
            //  get sample data 
    const data = await  fs.readFileSync(
        `${process.cwd()}/src/app/_data/sample_data.json`,
        "utf8"
      );
    
      const parsedData = JSON.parse(data);
    
      const phoneBook = new PhoneBook();
    // loop thorugh the sample data and insert records inyto phone book
    
    for(let record= 0; record < parsedData.length; record++){
      await phoneBook.addPhoneRecord(parsedData[record]);
    }
    

    // get phone book

    console.log("PHone Directory: ", phoneBook.phone_record);

    // search for an existing phone number 
    console.log("PHone details Of 09012345644: ", await phoneBook.getPhoneDetails("09012345644"));
    
    
    // search for a non existing phone record
    console.log( await phoneBook.getPhoneDetails("09012311144"));
    
    
    //  list out all phone numbers
    
    console.log("List of phone Numbers", await phoneBook.listPhoneNumbers());
    
    } catch (error) {
        console.error(error);
    }

})()
