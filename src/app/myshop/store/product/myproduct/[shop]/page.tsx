import { options } from "@/app/api/auth/[...nextauth]/options";
import MyProductComponent from "@/app/components/myshop/myproduct/MyProductComponent";
import MyProductGlobalCom from "@/app/components/myshop/myproduct/MyProductGlobalCom";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import React from "react";

const MyProductPage = async ({
  params,
}: {
  params: { slug: string; shop: number };
}) => {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  console.log(params.shop);

  if (process.env.LANDING_PAGE?.includes(domain)) {
    try {
      const sessionServer = await getServerSession(options);
      const token = sessionServer?.bearer;

      const response = await fetch(
        `${process.env.SERVER_ENDPOINT}/api/myshop-board?id=${params.shop}`,
        {
          cache: "force-cache",
          next: { tags: ["wallet"] },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const shops = await response.json();
      console.log(shops);

      return (
        <div className="">
          <MyProductGlobalCom shop={shops} />
        </div>
      );
    } catch (error) {
      console.error("Error fetching shop data:", error);
      return (
        <div className="">
          <p>Error fetching shop data. Please try again later.</p>
        </div>
      );
    }
  } else {
    return (
      <div className="">
        <MyProductComponent />
      </div>
    );
  }
};

export default MyProductPage;
