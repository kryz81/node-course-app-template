const { hashSync } = require('bcrypt-node');

const hashPassword = password => {
  return hashSync(password, 40);
};

module.exports = {
  hashPassword,
};
