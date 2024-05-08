"use client";
import { persistor, store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { UserDataProvider } from "../supplier/UserData";

const LayoutWeb = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="">data</div>
      {children}
    </div>
  );
};

export default LayoutWeb;
