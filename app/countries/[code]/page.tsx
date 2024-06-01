import Link from "next/link"
import { IoMdArrowRoundBack } from "react-icons/io";

interface Neighbor {
  parent: string;
  cca2: string;
}

export default async function countryPage( { params }: { params: { code: string } }) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/?codes=${params.code}`);
  const country = (await res.json())[0];

  const resB = await fetch("https://restcountries.com/v3.1/alpha/?codes=" + country.borders)
  const dataB = await resB.json();
  let neighbors: Neighbor[] = [];
  if (dataB.length > 0) {
    for (let neighbor of dataB) {
        neighbors.push({ parent: params.code, cca2: neighbor.cca2.toLowerCase() });
    }
  } else {
    neighbors.push({ parent: params.code, cca2: "None" });
  }

    let currencies = [];
	let capitals = [];
	let languages = [];
	let region = "";
	let subregion = "";

	const hasCurrencies = country.currencies && Object.keys(country.currencies).length > 0;
	const hasCapital = country.capital && Object.keys(country.capital).length > 0;
	const hasLanguages = country.languages && Object.keys(country.languages).length > 0;
	const hasRegion = country.region && country.region !== "";
	const hasSubregion = country.subregion && country.subregion !== "";

	if (country) {
		if (hasCurrencies) {
			for (const currency in country.currencies || []) {
				currencies.push(country.currencies[currency].name);
			}
		} else {
			currencies.push("None");
		}
		if (hasCapital) {
			for (const capital in country.capital || []) {
				capitals.push(country.capital[capital]);
			}
		} else {
			capitals.push("None");
		}
		if (hasLanguages) {
			for (const language in country.languages || []) {
				languages.push(country.languages[language]);
			}
		} else {
			languages.push("None");
		}
		if (hasRegion) {
			region = country.region;
		} else {
			region = "None";
		}
		if (hasSubregion) {
			subregion = country.subregion;
		} else {
			subregion = "None";
		}
	}

  return (
    <>
    	<div className="flex items-center justify-center my-6">
        	<h1 className="text-4xl font-bold px-4">{country.name.official}</h1>
			<Link href="/" className="absolute left-4 cursor-pointer text-black">
				<IoMdArrowRoundBack size={30} />
			</Link>
      	</div>
        <div className="flex flex-col items-center align-middle justify-center flex">
          <img src={country.flags.svg} alt={country.name.official} width={460} className="rounded-md shadow-lg border-4 border-neutral-200"/>
          <div className="flex flex-col items-center w-full text-black p-5 text-center font-bold text-2xl">
            <p>Capital: <span className="font-normal">{capitals.join(", ")}</span></p>
            <p>Languages:{" "}<span className="font-normal">{languages.join(", ")}</span></p>
            <p>Population:{" "}<span className="font-normal">{country.population.toLocaleString()}</span></p>
            <p>Currency:{" "}<span className="font-normal">{currencies.join(", ")}</span></p>
            <p>Region: <span className="font-normal">{region}</span></p>
            <p>Subregion:{" "}<span className="font-normal">{subregion}</span></p>
            <div className="flex flex-row">Borders:{" "}
				{neighbors.map((neighbor, index) => {
					const isLast = index === neighbors.length - 1;
					if (neighbor.cca2 === "None") {
						return <p key={index}>None</p>;
					} else {
						return (	
							<Link key={index} as={`/countries/${neighbor.cca2}`} href={`/countries/${neighbor.cca2}`}>
								<p className="font-normal pl-1">{neighbor.cca2.toUpperCase()}<span>{!isLast && ', '}</span></p>
							</Link>
						);
					}
				})}
            </div>
          </div>
        </div>
    </>
  )
}