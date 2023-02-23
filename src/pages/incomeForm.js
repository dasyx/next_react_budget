import Form from "./Form";

const IncomeForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      buttonText="Add Income"
      title="Incomes"
      amountLabel="Amount (positive)"
    />
  );
};

export default IncomeForm;