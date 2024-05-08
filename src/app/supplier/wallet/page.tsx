import { options } from "@/app/api/auth/[...nextauth]/options";
import HistoryWalletComponent from "@/app/components/myshop/wallet/HistoryWalletComponent";
import { getServerSession } from "next-auth";
import React from "react";

const WalletPage = async () => {
  const sessionServer = await getServerSession(options);
  const token = sessionServer?.bearer;
  const wallets = await (
    await fetch(process.env.SERVER_ENDPOINT + "/api/wallet/", {
      cache: "force-cache",
      next: { tags: ["wallet"] },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
  return (
    <div>
      <HistoryWalletComponent items={wallets} />
    </div>
  );
};

export default WalletPage;
