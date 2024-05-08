"use client";
import { toggleProfileMenu } from "@/redux/profileSlice";
import { Container, Link, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const MenuLogout = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  return (
    <div>
      <Link
        onClick={() => {
          signOut();
        }}
        href="/sign-in"
        className="flex items-center px-8 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100"
      >
        <span className="inline-block mr-3">
          <LogOut />
        </span>
        <span> Sign Out </span>
      </Link>
    </div>
  );
};

export default MenuLogout;
