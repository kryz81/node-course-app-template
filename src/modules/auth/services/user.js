const { compare } = require('bcrypt');
const userModel = require('../models/user');

/**
 * Get user by email
 *
 * @param email
 * @returns {Promise}
 */
const getUserByEmail = email => userModel.findOne({ email, enabled: true }).exec();

/**
 * Verify user password
 *
 * @param password
 * @param hash
 * @returns {Promise}
 */
const isValidPassword = (password, hash) => compare(password, hash);

module.exports = {
  getUserByEmail,
  isValidPassword,
};
