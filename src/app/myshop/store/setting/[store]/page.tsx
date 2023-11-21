import { options } from "@/app/api/auth/[...nextauth]/options";
import MyShopStoreCustom from "@/app/components/myshop/store/MyShopStoreCustom";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

const page = async ({
  params,
  request,
}: {
  request?: NextRequest;
  params: { slug: string; store: number };
}) => {
  const sessionServer = await getServerSession(options);
  const token = sessionServer?.bearer;
  const response = await fetch(
    `${process.env.SERVER_ENDPOINT}/api/myshop-board/shop-detail/${params.store}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (!data.id) {
    redirect("/myshop/store");
  }

  return (
    <div>
      <MyShopStoreCustom item={data} />
    </div>
  );
};

export default page;
