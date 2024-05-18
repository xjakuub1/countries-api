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
	console.log(country);
	return (
		<Modal>
			<div className="text-black">
				<p>{country.name.official}</p>
				<p>{country.capital}</p>
				<p>{country.region}</p>
			</div>
		</Modal>
	);
}