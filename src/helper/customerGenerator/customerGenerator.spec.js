const { customerGenerator } = require("./customerGenerator");

describe("Customer Generator", () => {
  it("should generate a customer", () => {
    const customer = customerGenerator();
    expect(customer).toHaveProperty("id");
    expect(customer).toHaveProperty("name");
    expect(customer).toHaveProperty("email");
    expect(customer).toHaveProperty("phone");
  });

  it("should generate a customer with valid types for each property", () => {
    const customer = customerGenerator();
    expect(typeof customer.id).toBe("string");
    expect(typeof customer.name).toBe("string");
    expect(typeof customer.email).toBe("string");
    expect(typeof customer.phone).toBe("string");
  });

  it("should generate unique ids for each customer", () => {
    const customer1 = customerGenerator();
    const customer2 = customerGenerator();
    expect(customer1.id).not.toEqual(customer2.id);
  });
});
