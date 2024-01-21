import { customersListGenerator } from "../helper/customersListGenerator";
import { transactionsListGenerator } from "../helper/transactionsListGenerator";

const TRANSACTIONS = "transactions";
const CUSTOMERS = "customers";

/**
 * FakeFetch is a class that simulates the fetch API fo some urls.
 *
 */
class FakeFetch {
  static instance;
  customers;
  transactions;

  constructor() {
    if (FakeFetch.instance) return FakeFetch.instance;

    this.init();

    FakeFetch.instance = this;
  }
  init() {
    this.customers = customersListGenerator(100);
    this.transactions = transactionsListGenerator(this.customers, 100000);
  }
  fetch(url) {
    if (!url) return this.#response(undefined);

    const { resource, id } = this.#parseUrl(url);
    const data = this.#processRequest(resource, id);

    return this.#response(data);
  }
  #parseUrl(url) {
    if (url === undefined) return undefined;

    const urlParts = url.split("/");
    const resource = urlParts[1];
    const id = urlParts[2];

    return { resource, id };
  }
  #processRequest(resource, id) {
    switch (resource) {
      case CUSTOMERS:
        if (id) {
          return this.customers.find((customer) => customer.id === id);
        } else {
          return this.customers;
        }
      case TRANSACTIONS:
        if (id) {
          return this.transactions.find((transaction) => transaction.id === id);
        } else {
          return this.transactions;
        }
      default:
        return undefined;
    }
  }
  #response(data) {
    return new Promise((resolve, reject) => {
      if (data === undefined) {
        const response = {
          status: 404,
          statusText: "Not Found",
        };
        reject(response);
      }
      setTimeout(() => {
        const response = {
          status: 200,
          statusText: "Endpoint Found",
          data,
        };
        resolve(response);
      }, 1000);
    });
  }
}

export { FakeFetch };
