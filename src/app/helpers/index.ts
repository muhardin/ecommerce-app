import axios from "axios";
import { DataToAdd, ResponseData } from "../../../type";
import { productData } from "../constants/data";
import { getServerSession } from "next-auth";

export const getProducts = async () => {
  // const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
  const res = await fetch(process.env.SERVER_ENDPOINT + "/api/products", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};
export const getTrendingProducts__ = async () => {
  const res = await fetch(
    "https://fakestoreapiserver.reactbd.com/smarttrending"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};
export const getTrendingProducts = async () => {
  const res = await fetch(
    process.env.SERVER_ENDPOINT + "/api/products/trending/get"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export const calculatePercentage = (oldPrice: any, price: any) => {
  return !!parseFloat(price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / price) * 100).toFixed(0)
    : 0;
};

export const FormattedCommaNumber = (num: any) => {
  if (num >= 1) {
    const decimalPart = num - Math.floor(num);
    if (decimalPart >= 0.3) {
      return Math.ceil(num);
    }
  } else {
    return 1;
  }
  return num;
};

export const getSingleProduct_ = (id: number) => {
  const item = productData.find((product) => product.id === id);
  return item;
};

export const getSingleProduct = async (id: number) => {
  const item = await fetch(
    process.env.SERVER_ENDPOINT + "/api/products/" + id,
    { next: { revalidate: 5 } }
  );
  const data = await item.json();
  return data;
};

export async function addData(
  dataToAdd: DataToAdd,
  token: any,
  url: any
): Promise<ResponseData | undefined> {
  const bearerToken = token;
  const apiUrl = url; // Replace with your API endpoint URL

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToAdd),
    });

    if (response.ok) {
      const responseData: ResponseData = await response.json();
      return responseData;
    } else {
      throw new Error("Failed to add data");
    }
  } catch (error) {
    console.error("Error adding data:", error);
  }

  return undefined;
}
export function formatDateAndTime(dateTimeString: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = new Date(dateTimeString).toLocaleString(
    undefined,
    options
  );
  return formattedDate;
}
export const getUserDetail = async (token: string) => {
  const apiUrl = "http://localhost:8000/api/user/profile"; // Replace with your API endpoint

  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.data.data;
  console.log(data);

  return data;
};
