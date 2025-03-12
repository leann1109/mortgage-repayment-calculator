import React from "react";
import "./Results.css";

export const Results = () => {
  return (
    <section className="results-section">
      <h2>Your results</h2>

      <p>Your results are shown below based on the information you provided. 
        To adjust the results, edit the form and click “calculate repayments” again.
      </p>

      <div className="result-container">
        <h3>Your monthly repayments</h3>
        <p>amount</p>

        <h3>Total you'll repay over the term</h3>
        <p>amount</p>
      </div>
    </section>
  );
}
