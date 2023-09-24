"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const AvatarHeader = () => {
  const { data: session } = useSession();
  const [data, setData]: any = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const response = await fetch(
          `${process.env.SERVER_ENDPOINT!}/api/user/profile`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.bearer}`,
            },
          }
        );
        const data = await response.json();
        const dataD = data?.data;
        setData(dataD);
        setLoaded(true);
      }
    };
    fetchData();
  }, [session?.bearer, session]);
  // console.log(process.env.SERVER_ENDPOINT);
  return (
    <>
      {!loaded ? (
        <div className="animate-pulse">
          <svg
            className="w-500 h-500 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      ) : data?.photo_url ? (
        <Image
          className=" rounded-full object-cover"
          src={data?.photo_url}
          alt="image"
          width={40}
          height={40}
        />
      ) : (
        <div className="animate-pulse">
          <svg
            className="w-500 h-500 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}
    </>
  );
};

export default AvatarHeader;
