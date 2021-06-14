//Use fs to read a file, in this case the file is the cars inventary
const fs = require("fs");

//This function is used to read a file
//If the inventary change then only is neccesary update the file inventary.txt
function readFile(path, charset) {
  try {
    return fs.readFileSync(path, charset);
  } catch (error) {
    console.log("Error to read file, ", error);
  }
  return "";
}

function writeInformationInFile(path, charset, data) {
  try {
    fs.writeFileSync(path, data, { encoding: charset, flag: "a+" });
    return true;
  } catch (error) {
    console.log("Error to write information in file, ", error);
  }
  return false;
}

function isValidInformationRequest(information) {
  try {
    if (information.firstName === undefined || information.firstName == "") {
      console.log("Firstname incorrect");
      return false;
    } else if (
      information.lastName === undefined ||
      information.lastName == ""
    ) {
      console.log("LastName incorrect");
      return false;
    } else if (information.address === undefined || information.address == "") {
      console.log("Address incorrect");
      return false;
    } else if (
      information.estimatedDate === undefined ||
      information.estimatedDate == ""
    ) {
      console.log("Etimateddate incorrect");
      return false;
    }
    return true;
  } catch (error) {
    console.log("Error to validate information, ", error);
  }
}
module.exports = {
  readFile,
  writeInformationInFile,
  isValidInformationRequest
};
