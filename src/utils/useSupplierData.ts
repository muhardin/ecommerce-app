import { useEffect, useState } from "react";
import axios from "axios";

interface Supplier {
  // Define the structure of your supplier data
  id: number;
  // ... other properties
}

const useSupplierData = (bearerToken?: string | null) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const headers = {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "multipart/form-data",
        };
        try {
          const response = await axios.get<Supplier[]>(
            `${process.env.SERVER_ENDPOINT}/api/supplier-board/suppliers`,
            { headers }
          );
          setSuppliers(response.data);
        } catch (error) {
          console.error("Error fetching supplier data:", error);
        }
      }, 9000);
    };

    if (bearerToken) {
      fetchData();
    }
  }, [bearerToken]);

  return suppliers;
};

export default useSupplierData;
