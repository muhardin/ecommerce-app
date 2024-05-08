"use client";
import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import PaymentComponent from "../components/Payment";
import { useSearchParams } from "next/navigation";

const PaymentPage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("tripay_merchant_ref");
  // console.log(search);
  return (
    <Container>
      <PaymentComponent id={search} />
    </Container>
  );
};

export default PaymentPage;
