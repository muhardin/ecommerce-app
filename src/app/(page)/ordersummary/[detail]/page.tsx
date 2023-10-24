import OrderSummaryDetail from "@/app/components/OrderSummaryDetail";

const OrderSummary = ({ params }: { params: { detail?: string } }) => {
  console.log(params.detail);
  return (
    <div className="">
      <OrderSummaryDetail id={params.detail} />
    </div>
  );
};

export default OrderSummary;
