const ERROR_GET_INFORMATION = {
  status: 500,
  description: "Error to get the vehicle´s information"
};

const OK_INSERT_MAINTENANCE_INFORMATION = {
  status: 201,
  description: "Information registered"
};

const ERROR_INSERT_MAINTENANCE_INFORMATION = {
  status: 500,
  description: "Error to register information"
};

const ERROR_BAD_REQUEST = {
  status: 400,
  description: "Bad request, please verify your information"
};

module.exports = {
  ERROR_GET_INFORMATION,
  OK_INSERT_MAINTENANCE_INFORMATION,
  ERROR_BAD_REQUEST
};
