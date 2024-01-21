const { faker } = require("@faker-js/faker");

/**
 * Generates a customer
 * @returns {Object} - customer
 * @example customerGenerator()
 * {
 * id: "1",
 * name: "John Doe",
 * email: "",
 * phone: "",
 * }
 */
function customerGenerator() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  };
}

module.exports = { customerGenerator };
