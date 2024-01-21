import pointsCalculator from "../../../helper/pointsCalculator";

export function summaryCalculator(transactions) {
  const perMonth = {};
  let totalPoints = 0;

  transactions.forEach((transaction) => {
    const monthKey = transaction.timestamp.getMonth();
    const calendarMonth = monthKey + 1;
    const amount = transaction.amount;
    const points = pointsCalculator(amount);
    totalPoints += points;

    perMonth[calendarMonth] = points;
  });

  return { perMonth, totalPoints };
}
