import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
Mortgage Calculator
Clear All

Mortgage Amount

Mortgage Term

Interest Rate

Mortgage Type
Repayment
Interest Only

Calculate Repayments

{/* <!-- Empty results start --> */}

Results shown here

Complete the form and click “calculate repayments” to see what 
your monthly repayments would be.

{/* <!-- Empty results end --> */}

{/* <!-- Completed results start --> */}

Your results

Your results are shown below based on the information you provided. 
To adjust the results, edit the form and click “calculate repayments” again.

Your monthly repayments

Total you'll repay over the term

{/* <!-- Completed results end --> */}

<div className="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
  Coded by <a href="#">Lean Obregon</a>.
</div>
    </div>
  );
}

export default App;
