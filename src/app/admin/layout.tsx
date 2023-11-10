import AdminLayout from "@/components/admin/Layout";

export default async function LayoutSupplier({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
