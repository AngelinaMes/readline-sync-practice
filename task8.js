function calculateBalance(incomes, expenses) {
  const totalIncome = incomes.reduce((acc, income) => acc + income, 0);
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense, 0);
  const balance = totalIncome - totalExpenses;
  return balance;
}
