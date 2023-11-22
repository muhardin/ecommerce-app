import { options } from "@/app/api/auth/[...nextauth]/options";
import MyShopStoreCustom from "@/app/components/myshop/store/MyShopStoreCustom";
import StoreDomainList from "@/app/components/myshop/store/domain/StoreDomainList";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

const domainSetup = async ({
  params,
}: {
  params: { slug: string; store: number };
}) => {
  // const sessionServer = await getServerSession(options);
  // const token = sessionServer?.bearer;
  // const response = await fetch(
  //   `${process.env.SERVER_ENDPOINT}/api/myshop-board/domains/${params.store}`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  // );
  // const data = await response.json();

  // if (!data.id) {
  //   // redirect("/myshop/store");
  // }
  // console.log(data);
  // console.log(params.store);
  return (
    <div>
      <StoreDomainList id={params.store} />
    </div>
  );
};

export default domainSetup;
