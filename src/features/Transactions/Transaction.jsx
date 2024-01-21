import React, { useMemo } from "react";
import pointsCalculator from "./../../helper/pointsCalculator";
import styles from "./Transaction.module.css";

export function Transaction({ transaction }) {
  const points = useMemo(() => {
    if (transaction.amount) {
      return pointsCalculator(transaction.amount);
    }

    return 0;
  }, [transaction.amount]);

  return (
    <tr key={transaction.id} className={styles.tableRow}>
      <td>{transaction.timestamp.toLocaleDateString()}</td>
      <td>{`$${transaction.amount}`}</td>
      <td>{transaction.status}</td>
      <td>{points}</td>
    </tr>
  );
}
