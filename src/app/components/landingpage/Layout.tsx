"use client";
import { useEffect, useState } from "react";
import BannerFlash from "@/components/landingpage/BannerFlash";
import Image from "next/image";
import Link from "next/link";
import { SessionProvider, useSession } from "next-auth/react";
import LayoutComponent from "./LayoutComponent";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";
import { UserDataProvider } from "../supplier/UserData";

const LayoutWeb = ({ children }: { children: React.ReactNode }) => {
  /*
  <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SessionProvider>
          <UserDataProvider>{children}</UserDataProvider>
        </SessionProvider>
      </PersistGate>
    </Provider>
  */
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SessionProvider>
            <UserDataProvider>
              <LayoutComponent>{children}</LayoutComponent>
            </UserDataProvider>
          </SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default LayoutWeb;
