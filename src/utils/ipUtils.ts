// utils/ipUtils.ts
import axios from "axios";

export async function getClientIPAddress(): Promise<string> {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return "Unknown";
  }
}

export function formatUnixTimestamp(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
  return date.toLocaleDateString(); // You can specify the format as needed
}
