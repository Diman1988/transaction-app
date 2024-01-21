const { customersListGenerator } = require("../customersListGenerator");
const { transactionsListGenerator } = require("./transactionsListGenerator");

describe("Transactions List Generator", () => {
  let count;
  let customersList;

  beforeEach(() => {
    count = 10;
    customersList = customersListGenerator(count);
  });
  it("should generate a transactions list", () => {
    const transactionsList = transactionsListGenerator(customersList, count);

    expect(transactionsList).toHaveLength(count);
  });

  it("should generate a transactions list with valid types for each property", () => {
    const transactionsList = transactionsListGenerator(customersList, count);

    transactionsList.forEach((transaction) => {
      expect(typeof transaction.id).toBe("string");
      expect(typeof transaction.customerId).toBe("string");
      expect(typeof transaction.customerName).toBe("string");
      expect(typeof transaction.status).toBe("string");
      expect(typeof transaction.amount).toBe("number");
      expect(transaction.timestamp instanceof Date).toBeTruthy();
    });
  });

  it("should return an empty list if the count is zero", () => {
    count = 0;
    const transactionsList = transactionsListGenerator(count);
    expect(transactionsList).toHaveLength(count);
  });

  it("should return an empty list if the count is negative", () => {
    const transactionsList = transactionsListGenerator(-10);
    expect(transactionsList).toHaveLength(0);
  });

  it("should return an empty list if the customers list is empty", () => {
    customersList = [];
    const transactionsList = transactionsListGenerator(customersList, count);
    expect(transactionsList).toHaveLength(0);
  });
});
