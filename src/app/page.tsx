import Banner from "./components/Banner";
import Products from "./components/Products";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import LandingPageComponent from "@/components/landingpage/LandingPageComponent";
export default async function Home() {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";

  // console.log(domain);
  // console.log(headersList);
  // console.log(headersList.get("host"));
  if (domain == process.env.LANDING_PAGE) {
    return (
      <main>
        <LandingPageComponent />
      </main>
    );
  } else {
    return (
      <main>
        <Banner />
        <Products host={domain} />
      </main>
    );
  }
}
