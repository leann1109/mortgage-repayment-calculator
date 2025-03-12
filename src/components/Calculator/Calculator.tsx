import React, { useState } from "react";

export const Calculator = () => {
  const [mortgageAmount, setMortgageAmount] = useState<string | number>("");
  const [mortgageTerm, setMortgageTerm] = useState<string | number>("");
  const [interestRate, setInterestRate] = useState<string | number>("");
  const [mortgageType, setMortgageType] = useState("repayment");

  const monthlyInterestRate = (Number(interestRate) / 100 ) / 12;
  const calculateMonths = Number(mortgageTerm) * 12;
  console.log(monthlyInterestRate);

  const calculate = () => {
    const monthlyPayments = (
      Number(mortgageAmount) *
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, calculateMonths)) /
      (Math.pow(1 + monthlyInterestRate, calculateMonths) - 1)
    );

    return monthlyPayments;
  };

  console.log(calculate())

  const clearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("repayment");
  };

  return (
    <section className="calculator-section">
      <h1>Mortgage Calculator</h1>
      <button className="clear-button" onClick={clearAll}>
        Clear All
      </button>

      <p>Mortgage Amount</p>
      <input
        type="number"
        name="mortgage-amount"
        value={mortgageAmount}
        onChange={(e) => setMortgageAmount(e.target.value)}
      />

      <p>Mortgage Term</p>
      <input
        type="number"
        name="mortgage-term"
        value={mortgageTerm}
        onChange={(e) => setMortgageTerm(e.target.value)}
      />

      <p>Interest Rate</p>
      <input
        type="number"
        name="interest-rate"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />

      <form>
        <div className="mortgage-type-container">
          <p>Mortgage Type</p>
          <input
        type="radio"
        name="mortgage-type"
        value="repayment"
        checked={mortgageType === "repayment"}
        onChange={(e) => setMortgageType(e.target.value)}
          />
          <label htmlFor="mortgage-type">Repayment</label>

          <input
        type="radio"
        name="mortgage-type"
        value="interest"
        checked={mortgageType === "interest"}
        onChange={(e) => setMortgageType(e.target.value)}
          />
          <label htmlFor="interest-type">Interest Only</label>
        </div>
      </form>

      <button className="calculate-button" onClick={() => calculate}>
        {/* <img src="images/icon-calculator.svg" alt="calculator" /> */}
        Calculate Repayments
      </button>
    </section>
  );
};
