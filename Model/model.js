var utilities = require("../Helpers/Utilities.js");
var messages = require("../Messages/Messages.js");
const { uuid } = require("uuidv4");

function writeInformation(path, charset, information) {
  var id = uuid();
  var prefix = "\n###########\n" + new Date() + " - Id: " + id + "\n";
  var suffix = "\n###########\n";
  var res = utilities.writeInformationInFile(
    path,
    charset,
    prefix + information + suffix
  );
  var finalMessage = res
    ? messages.OK_INSERT_MAINTENANCE_INFORMATION
    : messages.ERROR_INSERT_MAINTENANCE_INFORMATION;
  finalMessage.idRecord = id;
  return finalMessage;
}

module.exports = { writeInformation };
