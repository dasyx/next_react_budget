import Form from "./Form";

const IncomeForm = ({ onAddIncome }) => {
  return (
    <Form
      onSubmit={onAddIncome} // --> onAddIncome au lieu de onSubmit
      buttonText="Add Income"
      title="Incomes"
      amountLabel="Amount (positive)"
    />
  );
};

export default IncomeForm;