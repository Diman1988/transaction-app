import React, { useMemo } from "react";
import { Transaction } from "./Transaction";
import style from "./TransactionsList.module.css";

export function TransactionsList({ transactions }) {
  return (
    <section className={style.table}>
      <h2>Transactions</h2>
      {transactions.length === 0 && <p>No transactions</p>}
      {transactions.length > 0 && (
        <table border={1}>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Award Points</th>
          </tr>
          {transactions &&
            transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
        </table>
      )}
    </section>
  );
}
