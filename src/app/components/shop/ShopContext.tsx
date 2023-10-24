"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the shape of your ShopData
interface ShopData {
  domain?: string;
  company_name: string;
  id: string;
}
interface ShopProviderProps {
  children: ReactNode;
}
const ShopDataContext = createContext<ShopData | undefined>(undefined);

export function ShopDataProvider({
  children,
  domain,
}: {
  children: ReactNode;
  domain?: any;
}) {
  const [shopData, setShopData] = useState<
    ShopData | undefined
  >(/* Your initial data */);
  useEffect(() => {
    // Fetch shop data or set it from your server here
    // For example:
    fetch(process.env.SERVER_ENDPOINT + "/api/shop/" + domain)
      .then((response) => response.json())
      .then((data: ShopData) => setShopData(data))
      .catch((error) => console.error("Error fetching shop data:", error));
  }, [domain]);

  return (
    <ShopDataContext.Provider value={shopData}>
      {children}
    </ShopDataContext.Provider>
  );
}

export function useShopData() {
  const context = useContext(ShopDataContext);
  // console.log(context);
  // if (context === undefined) {
  //   throw new Error("useShopData must be used within a ShopDataProvider");
  // }
  return context;
}
