import MyProductComponent from "@/app/components/myshop/myproduct/MyProductComponent";
import MyProductGlobalCom from "@/app/components/myshop/myproduct/MyProductGlobalCom";
import { headers } from "next/headers";
import React from "react";

const MyProductPage = () => {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  if (process.env.LANDING_PAGE?.includes(domain)) {
    return (
      <div className="">
        <MyProductGlobalCom />
      </div>
    );
  } else {
    return (
      <div className="">
        <MyProductComponent />
      </div>
    );
  }
};

export default MyProductPage;
