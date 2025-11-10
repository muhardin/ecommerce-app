import React from 'react';

import { getServerSession } from 'next-auth';

import { options } from '@/app/api/auth/[...nextauth]/options';
import ProductAvailableGlobalComp
  from '@/app/components/myshop/products/ProductAvailableGlobalComp';
import { getRealDomain } from '@/utils/domainUtils';

const AvailableProduct = async () => {
  const domain = getRealDomain();
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
        {shops ? (
          <ProductAvailableGlobalComp shop={shops} />
        ) : (
          <div>Loading...</div>
        )}

        {/* <ProductAvailableComponent /> */}
      </div>
    );
  }
};

export default AvailableProduct;
