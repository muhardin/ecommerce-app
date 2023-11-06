"use client";
import { useEffect, useState } from "react";
import BannerFlash from "@/components/landingpage/BannerFlash";
import Image from "next/image";
import Link from "next/link";
import { SessionProvider, useSession } from "next-auth/react";
import LayoutComponent from "./LayoutComponent";

const LayoutWeb = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <LayoutComponent>{children}</LayoutComponent>
      </SessionProvider>
    </>
  );
};

export default LayoutWeb;
