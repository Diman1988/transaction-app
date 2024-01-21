const {
  transactionGenerator,
} = require("../transactionGenerator/transactionGenerator");
const { faker } = require("@faker-js/faker");

/**
 * Generates a list of transactions
 * @param {Array} customers - The list of customers.
 * @param {number} count - The number of transactions to generate.
 * @returns {Array} - The list of transactions.
 * @example transactionsListGenerator(1);
 * [
 * {
 * id: "1",
 * customerId: "1",
 * customerName: "John Doe",
 * status: "success",
 * amount: 100,
 * timestamp: new Date(),
 * }
 * ]
 */
function transactionsListGenerator(customers, count) {
  if (customers.length === 0 || count <= 0) return [];

  const transactions = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * customers.length);
    const customer = customers[randomIndex];
    const amount = faker.number.int({ min: 1, max: 170 });

    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    const timestamp = faker.date.between(threeMonthsAgo, new Date());

    const transaction = transactionGenerator(customer, amount, timestamp);
    if (transaction) {
      transactions.push(transaction);
    }
  }

  return transactions;
}

module.exports = { transactionsListGenerator };
