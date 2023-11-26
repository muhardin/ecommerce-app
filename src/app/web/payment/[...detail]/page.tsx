import Container from "@/app/components/Container";
import PaymentWebComponent from "@/components/landingpage/PaymentWebComponent";
import React from "react";

const PaymentDetail = ({ params }: { params: { detail?: string } }) => {
  // console.log(params);
  // console.log(params.detail);
  return (
    <Container>
      {/* <div className="">Payment</div> */}
      <PaymentWebComponent id={params.detail} />
    </Container>
  );
};

export default PaymentDetail;
