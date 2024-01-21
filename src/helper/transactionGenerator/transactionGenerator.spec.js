const { customerGenerator } = require("../customerGenerator");
const { transactionGenerator } = require("./transactionGenerator");
const { faker } = require("@faker-js/faker");

describe("Transaction Generator", () => {
  let customer;
  let amount;
  let timestamp;

  beforeEach(() => {
    customer = customerGenerator();
    amount = faker.number.int({ min: 1, max: 170 });

    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    timestamp = faker.date.between({ from: threeMonthsAgo, to: new Date() });
  });

  it("should generate a transaction", () => {
    const transaction = transactionGenerator(customer, amount, timestamp);

    expect(transaction).toHaveProperty("id");
    expect(transaction).toHaveProperty("customerId");
    expect(transaction).toHaveProperty("customerName");
    expect(transaction).toHaveProperty("status");
    expect(transaction).toHaveProperty("amount");
    expect(transaction).toHaveProperty("timestamp");
  });

  it("should have valid types for each transaction property", () => {
    const transaction = transactionGenerator(customer, amount, timestamp);
    expect(typeof transaction.id).toBe("string");
    expect(typeof transaction.customerId).toBe("string");
    expect(typeof transaction.customerName).toBe("string");
    expect(typeof transaction.status).toBe("string");
    expect(typeof transaction.amount).toBe("number");
    expect(transaction.timestamp instanceof Date).toBeTruthy();
  });

  it("should match the provided customer data in the transaction", () => {
    const transaction = transactionGenerator(customer, amount, timestamp);
    expect(transaction.customerId).toBe(customer.id);
    expect(transaction.customerName).toBe(customer.name);
    expect(transaction.status).toBe("success");
    expect(transaction.amount).toBe(amount);
    expect(transaction.timestamp).toBe(timestamp);
  });

  it("should handle zero amount", () => {
    const transaction = transactionGenerator(customer, 0, timestamp);
    expect(transaction).toBeUndefined();
  });

  it("should handle undefined amount", () => {
    const transaction = transactionGenerator(customer, undefined, timestamp);
    expect(transaction).toBeUndefined();
  });
});
