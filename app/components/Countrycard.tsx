'use client'

import { useCountry } from "@/queries/useCountry";
import Image from "next/image";
import Link from "next/link";

function CountryCard(props: { name: string }) {
	const { data: country, isLoading } = useCountry(props.name);

	return (
		<div className="flex flex-col items-center w-full">
			{!isLoading && <Link
				href={`/countries/${country.cca2.toLowerCase()}`}
				className="flex flex-row items-center bg-white rounded-lg text-black shadow-lg hover:bg-neutral-200 p-4 gap-4 w-full min-w-[458.5px]"
				passHref
			>
				<Image
					src={country.flags.png}
					alt={props.name}
					width={60}
					height={80}
					className="border-2 rounded-md border-black"
				/>
				<p className="text-md font-bold text-black">{country.name.common} </p>
			</Link>}
			
		</div>
	);
}

export default CountryCard;