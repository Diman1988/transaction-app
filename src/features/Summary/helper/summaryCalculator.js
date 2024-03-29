import pointsCalculator from "../../../helper/pointsCalculator";

export function summaryCalculator(transactions) {
  const perMonth = {};
  let totalPoints = 0;
  console.clear();
  transactions.forEach((transaction) => {
    const monthKey = transaction.timestamp.getMonth();
    const calendarMonth = monthKey + 1;
    const amount = transaction.amount;
    const points = pointsCalculator(amount);
    totalPoints += points;

    if (!perMonth[calendarMonth]) {
      perMonth[calendarMonth] = 0;
    }
    perMonth[calendarMonth] += points;
  });

  return { perMonth, totalPoints };
}
