// Use the client directive for using usePathname hook.
"use client";

// Use usePathname for catching route name.
import { usePathname } from "next/navigation";
import TestPage from "./test/page";
import LoginPage from "./(auth)/sign-in/page";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const LayoutProvider = ({ children }: Props) => {
  const pathname = usePathname();
  // console.log(pathname);
  switch (pathname) {
    // case "/test":
    //   return (
    //     <>
    //       <TestPage />
    //     </>
    //   );
    case "/sign-in_":
      return (
        <div>
          <LoginPage />
        </div>
      );

    default:
      return children;
  }
};
