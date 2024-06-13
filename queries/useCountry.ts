import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchCountry = async (codes: string) => {  
  const response = await axios.get('https://restcountries.com/v3.1/alpha', {
    params: {
      codes,
    }
  })

  return response.data[0];
}

export const useCountry = (codes: string) => useQuery({
  queryKey: ['country', codes],
  queryFn: () => fetchCountry(codes),
});
