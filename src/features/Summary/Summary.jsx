import React, { useMemo } from "react";
import { summaryCalculator } from "./helper/perMonthCalculator";
import styles from "./Summary.module.css";

export function Summary({ transactions }) {
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
      {monthesValues.map((month) => (
        <p>
          {monthes[month]}: {perMonth[month]}
        </p>
      ))}
      <p>
        <em>Rewards: {totalPoints}</em>
      </p>
    </section>
  );
}
