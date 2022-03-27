const util = require('util');
const fs = require('fs');
const fs_writeFile = util.promisify(fs.writeFile);
const fs_readFile = util.promisify(fs.readFile);


exports.savePhoneRecord = async (data) => {
    try {
        // parse json
      let store = `${process.cwd()}/src/_data/store.json`
      const fileData = await fs_readFile(store, "utf8");
      let ArrayData = JSON.parse(fileData);
      const newDataPayload = ArrayData.push(data)
      let JSONData = JSON.stringify(newDataPayload);
       await fs_writeFile(store, JSONData, 'utf8');
       console.log("Phone Record Saved")
    } catch (error) {
        throw error;
    }
}