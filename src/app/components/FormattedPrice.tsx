interface Amount {
  amount: Number;
  comma?: Number;
}
const FormattedPrice = ({ amount, comma }: Amount) => {
  const formattedAmount = new Number(amount).toLocaleString("id", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: Number(comma ? comma : 0),
  });
  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
