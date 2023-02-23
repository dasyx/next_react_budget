import { useState } from "react";

const Form = ({ onSubmit, buttonText, title, amountLabel }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ description, amount: Number(amount) });
    console.log(description, amount);
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="amount">{amountLabel}:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
