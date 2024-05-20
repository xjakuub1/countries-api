import { Modal } from "./modal";

export default async function countryModal({
	params: { id: countryId },
}: {
	params: { id: number };
}) {
	const res = await fetch(
		`https://restcountries.com/v3.1/alpha/?codes=${countryId}`
	);
	const country = (await res.json())[0];
	
	let currencies = [];
	let capital = "";
	let languages = [];
	let region = "";
	let borders = "";
	let subregion = "";

	const hasCurrencies = country.currencies && Object.keys(country.currencies).length > 0;
    const hasCapital = country.capital && country.capital.length > 0;
	const hasLanguages = country.languages && Object.keys(country.languages).length > 0;
    const hasRegion = country.region && country.region !== "";
	const hasSubregion = country.subregion && country.subregion !== "";
    const hasBorders = country.borders && country.borders.length > 0;

	if (country) {
		if (hasCurrencies) {
			for (const currency in country.currencies || []) {        
				currencies.push(country.currencies[currency].name)
			}
		} else {
			currencies.push("None");
		}
		if (hasCapital) {
			capital = country.capital[0];
		} else {
			capital = "None";
		}
		if (hasLanguages) {
			for (const language in country.languages || []) {        
				languages.push(country.languages[language])
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
		if (hasBorders) {
			borders = country.borders.join(", ");
		} else {
			borders = "None";
		}
	}

	return (
		<Modal>
			<div className="flex items-center absolute top-10 text-black">
				<h1 className="text-2xl font-bold px-4">{country.name.official}</h1>
			</div>
			<div className="flex-1 absolute m-auto top-28 h-1/3">
				<img src={country.flags.png} alt={country.name.official} className="rounded-md shadow-lg border-4 border-neutral-200 w-[310px]" />
				<div className="flex flex-col items-center w-full text-black">
					<p className="font-bold text-lg">Capital: <span className="font-normal">{capital}</span></p>
					<p className="font-bold text-lg">Languages: <span className="font-normal">{languages.join(", ")}</span></p>
					<p className="font-bold text-lg">Population: <span className="font-normal">{country.population.toLocaleString()}</span></p>
					<p className="font-bold text-lg">Currency: <span className="font-normal">{currencies.join(", ")}</span></p>
					<p className="font-bold text-lg">Region: <span className="font-normal">{region}</span></p>
					<p className="font-bold text-lg">Subregion: <span className="font-normal">{subregion}</span></p>
					<p className="font-bold text-lg">Borders: <span className="font-normal">{borders}</span></p>
				</div>
			</div>
		</Modal>
	);
}