const { faker } = require("@faker-js/faker");

/**
 * Generates a transaction object.
 *
 * @param {Object} customer - The customer object.
 * @param {number} amount - The transaction amount.
 * @param {Date} timestamp - The transaction date.
 * @returns {Object} The generated transaction.
 * @example transactionGenerator(1, { id: 1, name: "John Doe", }, 100, new Date());
 * {
 * id: 1,
 * customerId: 1,
 * customerName: "John Doe",
 * status: "success",
 * amount: 100,
 * timestamp: new Date(),
 * }
 */
function transactionGenerator(customer, amount, timestamp) {
  if (amount <= 0 || amount === undefined) return;

  return {
    id: faker.string.uuid(),
    customerId: customer.id,
    customerName: customer.name,
    status: "success",
    amount,
    timestamp,
  };
}

module.exports = { transactionGenerator };
