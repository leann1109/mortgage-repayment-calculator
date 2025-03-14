import React from "react";
import "./InputTextfield.css";

type InputTextfieldProps = {
  title: string;
  value: string | number;
  setValue: (value: string | number) => void;
};

export const InputTextfield = ({
  title,
  value,
  setValue,
}: InputTextfieldProps) => {
  return (
    <div className="input-container">
      <label
        id={title.replace(" ", "-").toLowerCase()}
        htmlFor={title}
        className="input-label"
      >
        {title}
      </label>
      <div className="input-wrapper">
        {title === "Mortgage Amount" ? (
          <span className="currency-symbol">$</span>
        ) : title === "Mortgage Term" ? (
          <span className="currency-symbol">years</span>
        ) : (
          <span className="interest-symbol">%</span>
        )}
        <input
          required
          type="number"
          name={title.replace(" ", "-").toLowerCase()}
          className="input-textfield"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
