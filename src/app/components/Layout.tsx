"use client";
import { persistor, store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { UserDataProvider } from "./supplier/UserData";
import { useShopData } from "./shop/ShopContext";
import { usePathname } from "next/navigation";
import MaintenancePage from "../maintenance/page";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const shopData = useShopData();
  // console.log(shopData?.status);
  if (Number(shopData?.status) === 0 && !pathname.startsWith("/myshop")) {
    return (
      <div>
        <MaintenancePage />
      </div>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SessionProvider>
          <UserDataProvider>{children}</UserDataProvider>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
