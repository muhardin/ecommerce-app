"use client";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const HistoryWalletComponent = () => {
  const { data: session } = useSession();
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const url = process.env.SERVER_ENDPOINT + "/api/wallet";
  const {
    data: histories,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });
  console.log(histories);
  return <div>HistoryWalletComponent</div>;
};

export default HistoryWalletComponent;
