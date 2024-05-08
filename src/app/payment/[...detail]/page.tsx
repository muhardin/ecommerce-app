import Container from "@/app/components/Container";
import PaymentComponent from "@/app/components/Payment";
import React from "react";

const PaymentDetail = ({ params }: { params: { detail?: string } }) => {
  // console.log(params);
  // console.log(params.detail);
  return (
    <Container>
      <PaymentComponent id={params.detail} />
    </Container>
  );
};

export default PaymentDetail;
