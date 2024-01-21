const { customersListGenerator } = require("./customersListGenerator");

describe("Customer List Generator", () => {
  it("should generate a customer list", () => {
    const count = 10;
    const customerList = customersListGenerator(count);
    expect(customerList).toHaveLength(count);
  });

  it("should generate a customer list with valid types for each property", () => {
    const customerList = customersListGenerator(10);
    customerList.forEach((customer) => {
      expect(typeof customer.id).toBe("string");
      expect(typeof customer.name).toBe("string");
      expect(typeof customer.email).toBe("string");
      expect(typeof customer.phone).toBe("string");
    });
  });

  it("should return an empty list if the count is zero", () => {
    const count = 0;
    const customerList = customersListGenerator(count);
    expect(customerList).toHaveLength(count);
  });

  it("should return an empty list if the count is negative", () => {
    const customerList = customersListGenerator(-10);
    expect(customerList).toHaveLength(0);
  });
});
