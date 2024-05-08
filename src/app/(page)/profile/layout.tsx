import Layout from "@/app/components/profile/Layout";
import Link from "next/link";

const layoutUser = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default layoutUser;
