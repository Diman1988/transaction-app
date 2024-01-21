import React from "react";
import styles from "./CustomersList.module.css";

export function CustomersList({ customers, active, setActive }) {
  const handleActiveCLick = (customer) => {
    if (setActive) {
      setActive(customer.id);
    }
  };

  return (
    <section className={styles.customers}>
      <h2>Customers</h2>
      {customers.map((customer) => (
        <div
          key={customer.id}
          onClick={() => handleActiveCLick(customer)}
          className={customer.id === active ? styles.active : undefined}
        >
          <p>{customer.name}</p>
        </div>
      ))}
    </section>
  );
}
