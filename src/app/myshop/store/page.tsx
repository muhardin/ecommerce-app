import { options } from "@/app/api/auth/[...nextauth]/options";
import MyShopListComponent from "@/app/components/myshop/store/MyShopListComponent";
import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
async function getData() {
  const session = await getServerSession(options);
  const token = session?.bearer;

  const res = await fetch(`${process.env.SERVER_ENDPOINT}/api/myshop-board/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return res.json();
}
const page = async (context: any) => {
  const shops = await getData();
  return (
    <>
      <div className="h-full p-4">
        <MyShopListComponent shops={shops} />
      </div>
    </>
  );
};

export default page;
