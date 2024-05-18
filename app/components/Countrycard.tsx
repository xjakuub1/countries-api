import Link from "next/link";

async function CountryCard(props: { name: string }) {
	const res = await fetch(
		`https://restcountries.com/v3.1/alpha/?codes=${props.name}`
	);
	const country = (await res.json())[0];

	return (
		<div className="flex flex-col items-center w-full">
			<Link
				href={`/countries/${country.cca2.toLowerCase()}`}
				className="flex flex-row items-center bg-white rounded-lg text-black shadow-lg hover:bg-neutral-200 p-4 gap-4 w-full min-w-[458.5px]"
        passHref
      >
				<img
					src={country.flags.png}
					alt={props.name}
					className="w-[80px] h-[60px] border-2 rounded-md border-black"
				/>
				<p className="text-md font-bold text-black">
					{country.name.common}
				</p>
			</Link>
		</div>
	);
}

export default CountryCard;