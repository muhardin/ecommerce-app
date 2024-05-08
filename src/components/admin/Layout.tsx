"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfileMenu } from "@/redux/profileSlice";
import { Wallet } from "lucide-react";
import SideMenuAdmin from "./SideMenuAdmin";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  const isOpen = useSelector((state: RootState) => state.profile.isOpen);
  const pathName = usePathname();

  return (
    <div className="bg-gray-100 xl:h-screen dark:bg-gray-800">
      <div className="body-content">
        <SideMenuAdmin />
        <div
          className={`transition-all ${isOpen ? " md:ml-[280px]" : "md:ml-0"}`}
          id="dash">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
