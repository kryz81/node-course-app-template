exports.add = async (req, res, next) => {
  try {
    // create a service in folder service and use it here
  } catch (err) {
    // log error, return 500 and error message
  }
};

exports.getList = (req, res, next) => {
  // use service to read the list of the users
  // filter user properties:
  // for example /users?search=Lisa should return only users with Lisa firstname/lastname/role
};

exports.getDetails = (req, res, next) => {
  // use service to read specific user
  // when "project" property is available in query return only properties from this list
  // for example /users/1?project=firstName,role should only return these two fields
};
