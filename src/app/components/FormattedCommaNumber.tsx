import React from "react";

const FormattedCommaNumber = ({ amount }: any) => {
  // Your number that you want to round up
  const number = amount;

  // Function to round up the number if the decimal part is greater than or equal to 0.4
  const roundUpIfNeeded = (num: any) => {
    const decimalPart = num - Math.floor(num);
    if (decimalPart >= 0.3) {
      return Math.ceil(num);
    }
    return num;
  };
  // console.log(amount);
  const roundedNumber = roundUpIfNeeded(amount);
  return <div>{roundedNumber}</div>;
};

export default FormattedCommaNumber;
