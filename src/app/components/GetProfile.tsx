import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const GetProfile = () => {
  async function getData() {
    const sessionServer = await getServerSession(options);
    const token = sessionServer?.bearer;
    const res = await fetch("http://127.0.0.1:8000/api/user/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json();
  }
  return <div>GetProfile</div>;
};

export default GetProfile;
