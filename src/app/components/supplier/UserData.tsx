"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";

// Define the shape of your UserData
interface UserData {
  id: number;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  phone_number: string | null;
  email: string;
  email_verified_at: string | null;
  password_text: string | null;
  created_at: string;
  updated_at: string;
  photo: string;
  country: string | null;
  photo_url: string;
  role: string;
  is_supplier: number;
  is_seller: number;
  is_company: number;
}

interface ApiResponse {
  success: boolean;
  data: UserData;
  message: string;
}

const UserDataContext = createContext<ApiResponse | undefined>(undefined);

export function UserDataProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession();

  // const [UserData, setUserData] = useState<
  //   ApiResponse | undefined
  // >(/* Your initial data */);

  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json", // Adjust headers as needed
      },
    }).then((res) => res.json());

  const urlAddPrimary = process.env.SERVER_ENDPOINT + "/api/user/profile/";
  const { data: UserData, error: primaryError } = useSWR(
    urlAddPrimary,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );

  // useEffect(() => {
  //   // Fetch shop data or set it from your server here
  //   // For example:
  //   fetch(process.env.SERVER_ENDPOINT + "/api/user/profile/", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + session?.bearer,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data: ApiResponse) => setUserData(data))
  //     .catch((error) => console.error("Error fetching shop data:", error));
  // }, [session?.bearer]);
  return (
    <UserDataContext.Provider value={UserData}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);
  return context;
}
