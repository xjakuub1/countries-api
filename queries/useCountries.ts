import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export const fetchCountries = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all').catch((err) => {
    throw err;
  });
  
  const countriesSorted = response.data.sort((a: any, b: any) =>
		a.name.common.localeCompare(b.name.common)
	);

  return countriesSorted;
}


export const useCountries = () => useQuery({
  queryKey: ['countries'],
  queryFn: fetchCountries,
})
