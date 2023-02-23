import Form from "./Form";

const ExpenseForm = ({ onAddExpense }) => {
  return (
    <Form
      onSubmit={onAddExpense} // --> onAddExpense au lieu de onSubmit
      buttonText="Add Expense"
      title="Expenses"
      amountLabel="Amount (negative)"
    />
  );
};

export default ExpenseForm;