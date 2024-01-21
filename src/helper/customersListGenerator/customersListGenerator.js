const { customerGenerator } = require("./../customerGenerator");

/**
 * Generates a list of customers
 * @param {number} count - number of customers to generate
 * @returns {Array} - list of customers
 * @example customersListGenerator(1);
 * [
 * {
 * id: "1",
 * name: "John Doe",
 * email: "",
 * phone: "",
 * }
 * ]
 */
function customersListGenerator(count) {
  const customers = [];
  for (let i = 0; i < count; i++) {
    customers.push(customerGenerator());
  }
  return customers;
}

module.exports = { customersListGenerator };
