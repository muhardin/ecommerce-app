import { options } from "@/app/api/auth/[...nextauth]/options";
import WithdrawComponents from "@/app/components/myshop/wallet/withdraw/WithdrawComponents";
import { getServerSession } from "next-auth";

const WithdrawPage = async () => {
  const sessionServer = await getServerSession(options);
  const token = sessionServer?.bearer;
  const items = await (
    await fetch(process.env.SERVER_ENDPOINT + "/api/wallet/withdraw", {
      cache: "force-cache",
      next: { tags: ["wallet"] },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
  return (
    <div className=" bg-white">
      <WithdrawComponents items={items} />
    </div>
  );
};

export default WithdrawPage;
