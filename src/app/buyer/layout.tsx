"use client";
import { persistor, store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SideBar from "../components/SideBar";
import { useState } from "react";

const LayoutSideBar = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState<boolean>(false);

  const handleValueChange = (newValue: boolean) => {
    setValue(newValue);
  };
  return (
    <div className="flex static">
      <div className="">
        <SideBar value={false} onValueChange={handleValueChange} />
      </div>
      {children}
    </div>
  );
};

export default LayoutSideBar;
