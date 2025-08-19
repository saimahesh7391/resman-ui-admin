import { useQuery } from "@tanstack/react-query";
import { use } from "react";


export const useAddress = () => {
  // Custom hook logic for addresses
  return useQuery({
    queryKey: ['address'],
    queryFn: async () => {
      const response = await fetch('/api/addresses');
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });
};
