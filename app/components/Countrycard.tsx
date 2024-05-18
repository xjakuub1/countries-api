import Link from "next/link";

async function CountryCard( props: {name: string}) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/?codes=${props.name}`);
  const country = (await res.json())[0];

  return (
    <ul className="flex flex-col items-center">
      <li className="space-y-4"> 
          <Link href={`/countries/${country.cca2.toLowerCase()}`} className="flex flex-row max-w-96 items-center bg-white rounded-lg text-black shadow-lg hover:bg-neutral-200">
            <img src={country.flags.png} alt={props.name} className="w-[80px] h-[60px] m-4 border-2 rounded-md border-black" />
            <p className="text-md font-bold text-black">{country.name.common}</p>
          </Link>					
      </li>
  </ul>
  )
}

export default CountryCard