import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Image from "next/image";
async function GetPhoto() {
  const sessionServer = await getServerSession(options);
  const token = sessionServer?.bearer;
  const res = await fetch(process.env.SERVER_ENDPOINT + "/api/user/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  // console.log(data.data);
  return (
    <div className="">
      <Image
        className=" rounded-full object-cover"
        src={data.data.photo_url}
        alt="image"
        width={40}
        height={40}
      />
    </div>
  );
}
export default GetPhoto;
