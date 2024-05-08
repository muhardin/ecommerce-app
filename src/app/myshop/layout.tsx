import Layout from "../components/myshop/layout";

export default async function LayoutSupplier({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
