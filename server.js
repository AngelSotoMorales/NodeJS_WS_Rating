//Use express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
var utilities = require("./Helpers/Utilities.js");
var messages = require("./Messages/Messages.js");
var model = require("./Model/model.js");

//Use Cors
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To Get the vehicle´s information
app.get("/informationVehicles", (req, res) => {
  try {
    const information = JSON.parse(
      utilities.readFile(process.env.PATH_FILE_INVENTARY, "utf8")
    );
    console.log("Vehicle´s information: ", information);
    res.status(200).json(information);
  } catch (error) {
    console.log("Error to get the vehicle´s information %s", error);
    res.status(500).json(messages.ERROR_GET_INFORMATION);
  }
});

//Create a new record in the file Mainyenance.txt
app.post("/insertMaintenance", (req, res) => {
  console.log("Request´s data: ", req.body);
  var message = "";
  if (utilities.isValidInformationRequest(req.body.userInformation)) {
    message = model.writeInformation(
      process.env.PATH_FILE_MAINTENANCE,
      "utf8",
      JSON.stringify(req.body.userInformation)
    );
  } else {
    message = messages.ERROR_BAD_REQUEST;
  }
  console.log(message);
  res.status(200).json(message);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.SERVER_PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
