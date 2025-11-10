import { options } from "@/app/api/auth/[...nextauth]/options";
import ProductAvailableComponent from "@/app/components/myshop/products/ProductAvailableComponent";
import ProductAvailableGlobalComp from "@/app/components/myshop/products/ProductAvailableGlobalComp";
import { getServerSession } from "next-auth";
import { getRealDomain } from "@/utils/domainUtils";
import React from "react";

const AvailableProduct = async ({
  params,
}: {
  params: { slug: string; shop: number };
}) => {
  const domain = getRealDomain();
  //   console.log(params);
  if (process.env.LANDING_PAGE?.includes(domain)) {
    const sessionServer = await getServerSession(options);
    const token = sessionServer?.bearer;
    const shops = await (
      await fetch(
        process.env.SERVER_ENDPOINT + "/api/myshop-board?id=" + params.shop,
        {
          cache: "force-cache",
          next: { tags: ["wallet"] },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    ).json();
    //console.log(shops);
    return (
      <div>
        <ProductAvailableGlobalComp shop={shops} />
      </div>
    );
  } else {
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
    return (
      <div>
        <ProductAvailableGlobalComp shop={shops} />
        {/* <ProductAvailableComponent /> */}
      </div>
    );
  }
};

export default AvailableProduct;
