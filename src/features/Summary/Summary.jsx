import React, { useMemo } from "react";
import { summaryCalculator } from "./helper/summaryCalculator";
import styles from "./Summary.module.css";

export function Summary({ transactions, activeCustomerId }) {
  const { perMonth, totalPoints } = useMemo(
    () => summaryCalculator(transactions),
    [transactions]
  );
  const monthesValues = useMemo(() => Object.keys(perMonth), [perMonth]);

  const monthes = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "Jun",
    7: "July",
    8: "August",
    9: "September",
    10: "Octobor",
    11: "November",
    12: "December",
  };

  return (
    <section className={styles.summary}>
      <h2>Summary</h2>
      {!activeCustomerId && (
        <p className={styles.selectText}>Select a customer</p>
      )}
      {monthesValues.map((month) => (
        <p key={month}>
          {monthes[month]}: {perMonth[month]}
        </p>
      ))}
      <p>
        <em className={styles.rewards}>Rewards: {totalPoints}</em>
      </p>
    </section>
  );
}
