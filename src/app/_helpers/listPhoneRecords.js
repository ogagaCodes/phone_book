const util = require('util');
const fs = require('fs');
const fs_readFile = util.promisify(fs.readFile);


exports.listPhoneRecords = async () => {
    try {
      let store = `${process.cwd()}/src/_data/store.json`
    //   read file
      const fileData = await fs_readFile(store, "utf8");
      let data = JSON.parse(fileData);
      return {
          data
      }
    } catch (error) {
        throw error;
    }
}