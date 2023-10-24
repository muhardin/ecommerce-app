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
