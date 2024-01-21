import React, { useEffect, useState } from "react";
import { FakeFetch } from "../services/api";

export function useFetch({ url }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fakeFetch = new FakeFetch();
        const response = await fakeFetch.fetch(url);

        if (response.status === 200) {
          setCustomers(response.data);
        }
      } catch (error) {
        console.error("Request to API failed:", error);
        setCustomers([]);
      }
    };

    fetchData();
  }, [url]);

  return customers;
}
