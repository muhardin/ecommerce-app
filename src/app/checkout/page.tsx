import Container from "../components/Container";
import CheckoutCart from "../components/CheckoutCart";

const CheckOut = () => {
  return (
    <Container>
      <h2 className=" text-2xl font-semibold mb-2">Cart</h2>
      <div className=" flex flex-col gap-5">
        <CheckoutCart />
      </div>
    </Container>
  );
};

export default CheckOut;
