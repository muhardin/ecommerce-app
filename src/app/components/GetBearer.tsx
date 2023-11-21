import { useSession } from "next-auth/react";
const GetBearer = () => {
  const { data: session } = useSession();
  // console.log(session?.bearer);
  return session?.bearer;
};

export default GetBearer;
