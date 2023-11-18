import Banner from "./components/Banner";
import Products from "./components/Products";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import LandingPageComponent from "@/components/landingpage/LandingPageComponent";
import DefaultPage from "@/components/DefaultPage";
export default async function Home() {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";

  if (domain == process.env.LANDING_PAGE) {
    return (
      <main>
        <LandingPageComponent />
      </main>
    );
  } else {
    return (
      <main>
        <DefaultPage domain={domain} />
      </main>
    );
  }
}
