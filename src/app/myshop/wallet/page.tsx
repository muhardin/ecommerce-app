import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Wallet } from "../../../../type";
import HistoryWalletComponent from "@/app/components/myshop/wallet/HistoryWalletComponent";

const WalletMyShopPage = async () => {
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
  //   console.log(wallets);
  //   console.log(token);
  return (
    <div className="">
      <HistoryWalletComponent items={wallets} />
    </div>
  );
};

export default WalletMyShopPage;
