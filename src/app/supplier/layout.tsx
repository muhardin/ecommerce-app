import Layout from "../components/supplier/layout";

export default async function LayoutSupplier({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
