import { ShadSearch } from "@/app/components/search"
import { useCountries } from "@/queries/useCountries"

const Countries = () => {	
  const { data: countriesSorted } = useCountries()

  return (
    <ShadSearch
      nameArr={countriesSorted.map(
        (c: { cca2: string }) =>
          c.cca2.toLowerCase()
      )}
    />
  )
}

export default Countries
