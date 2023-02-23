import Form from "./Form";

const ExpenseForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      buttonText="Add Expense"
      title="Expenses"
      amountLabel="Amount (negative)"
    />
  );
};

export default ExpenseForm;