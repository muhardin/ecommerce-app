import OrderSummaryDetail from "@/app/components/OrderSummaryDetail";
import OrderHistorySummary from "@/app/components/buyer/OrderHistorySummary";

const OrderSummary = ({ params }: { params: { detail?: string } }) => {
  // console.log(params.detail);
  return (
    <div className="">
      {/* <OrderSummaryDetail id={params.detail} /> */}
      <OrderHistorySummary id={params.detail} />
    </div>
  );
};

export default OrderSummary;
