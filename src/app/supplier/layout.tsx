import Layout from "../components/supplier/layout";
import "react-quill/dist/quill.snow.css";

export default async function LayoutSupplier({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
  // return <Layout>{children}</Layout>;
}
