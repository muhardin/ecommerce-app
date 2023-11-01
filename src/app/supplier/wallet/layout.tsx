import LayoutWallet from "@/app/components/myshop/wallet/LayoutWallet";

export default async function LayoutSupplier({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWallet>{children}</LayoutWallet>;
}
