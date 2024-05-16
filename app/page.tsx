import Card from "./components/card";
import Searchbar from "./components/search";

export default async function Home() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  const countriesSorted = countries.sort((a: any, b: any) => a.name.common.localeCompare(b.name.common));

  return (
    <div className="container items-center bg-white">
      {countriesSorted.map(
        (country: { name: { common: string }, flags: { png: string }, cca2: string }) => (
          <div>
            <div>
              <Searchbar key={country.name.common} name={country.name} />
            </div>
            <div className="flex flex-col ml-24 pl-96 py-4">
              <Card key={country.cca2} name={country.name.common} flags={country.flags.png} path={country.cca2} />
            </div>
          </div>
        )
      )}
    </div>
  );
}