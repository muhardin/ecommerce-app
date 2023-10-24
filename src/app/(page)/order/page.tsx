import Container from "@/app/components/Container";
import OrderDetails from "@/app/components/OrderDetails";
import OrderHistory from "@/app/components/OrderHistory";

const OrderPage = () => {
  return (
    <div>
      <Container>
        {/* <OrderDetails /> */}
        <OrderHistory />
      </Container>
    </div>
  );
};

export default OrderPage;
