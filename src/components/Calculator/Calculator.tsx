import React, { useState } from "react";
import { InputTextfield } from "../InputTextfield/InputTextfield";
import calculator from "../../assets/images/icon-calculator.svg";
import "./Calculator.css";

type CalculatorProps = {
  setMonthlyRepayment: (value: number) => void;
  setTotalRepayment: (value: number) => void;
};

export const Calculator = ({
  setMonthlyRepayment,
  setTotalRepayment,
}: CalculatorProps) => {
  const [mortgageAmount, setMortgageAmount] = useState<string | number>("");
  const [mortgageTerm, setMortgageTerm] = useState<string | number>("");
  const [interestRate, setInterestRate] = useState<string | number>("");
  const [mortgageType, setMortgageType] = useState("");

  const monthlyInterestRate = Number(interestRate) / 100 / 12;
  const calculateMonths = Number(mortgageTerm) * 12;

  const calculateRepayment = () => {
    const monthlyPayments =
      (Number(mortgageAmount) * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -calculateMonths));

    setMonthlyRepayment(Math.round(monthlyPayments * 100) / 100);
  };

  const calculateInterestOnly = () => {
    const monthlyPayments = Number(mortgageAmount) * monthlyInterestRate;

    setMonthlyRepayment(Math.round(monthlyPayments * 100) / 100);
  };

  const calculate = () => {
    if (mortgageType === "repayment") {
      return calculateRepayment();
    } else {
      return calculateInterestOnly();
    }
  };

  // total amount is not correct
  const calculateTotalRepayment = () => {
    const totalRepayment = Number(mortgageAmount) + Number(interestRate);
    setTotalRepayment(totalRepayment);
  };

  const clearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
    setMonthlyRepayment(0);
    setTotalRepayment(0);
  };

  return (
    <section className="calculator-section">
      <h1 className="heading-text">Mortgage Calculator</h1>
      <button className="clear-button" onClick={clearAll}>
        Clear All
      </button>

      <form className="calculator-form">
        <InputTextfield
          title="Mortgage Amount"
          value={mortgageAmount}
          setValue={setMortgageAmount}
        />

        <InputTextfield
          title="Mortgage Term"
          value={mortgageTerm}
          setValue={setMortgageTerm}
        />

        <InputTextfield
          title="Interest Rate"
          value={interestRate}
          setValue={setInterestRate}
        />

        <div className="mortgage-type-container">
          <label id="mortgage-type" className="input-title">
            Mortgage Type
          </label>
          <div className="radio-container">
            <input
              type="radio"
              name="mortgage-type"
              value="repayment"
              checked={mortgageType === "repayment"}
              className="custom-radio"
              required
              onChange={(e) => setMortgageType(e.target.value)}
            />
            <label htmlFor="mortgage-type" className="radio-label">
              Repayment
            </label>
          </div>

          <div className="radio-container">
            <input
              type="radio"
              name="mortgage-type"
              value="interest"
              checked={mortgageType === "interest"}
              className="custom-radio"
              required
              onChange={(e) => setMortgageType(e.target.value)}
            />
            <label htmlFor="interest-type" className="radio-label">
              Interest Only
            </label>
          </div>
        </div>
      </form>

      <button
        className="calculate-button"
        onClick={() => {
          calculate();
          calculateTotalRepayment();
        }}
      >
        <img src={calculator} alt="calculator" className="calculator-icon" />
        Calculate Repayments
      </button>
    </section>
  );
};
