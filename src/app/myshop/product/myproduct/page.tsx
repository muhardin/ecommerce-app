import { options } from "@/app/api/auth/[...nextauth]/options";
import MyProductComponent from "@/app/components/myshop/myproduct/MyProductComponent";
import MyProductGlobalCom from "@/app/components/myshop/myproduct/MyProductGlobalCom";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import React from "react";

const MyProductPage = async () => {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  if (process.env.LANDING_PAGE?.includes(domain)) {
    const sessionServer = await getServerSession(options);
    const token = sessionServer?.bearer;
    const shops = await (
      await fetch(process.env.SERVER_ENDPOINT + "/api/myshop-board/", {
        cache: "force-cache",
        next: { tags: ["wallet"] },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).json();
    console.log(shops);
    return (
      <div className="">
        <MyProductGlobalCom shop={shops} />
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
