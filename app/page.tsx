import Header from "./components/header";
import { ShadSearch } from "./components/search";

export default async function Home() {
	const res = await fetch("https://restcountries.com/v3.1/all");
	const countries = await res.json();
	const countriesSorted = countries.sort((a: any, b: any) =>
		a.name.common.localeCompare(b.name.common)
	);

	return (
		<>
			<header className='z-10 sticky top-0 w-full'>
				<Header />
			</header>
			<div className="flex flex-col h-full w-full items-center bg-white">
				<ShadSearch
					nameArr={countriesSorted.map(
						(c: { cca2: string }) =>
							c.cca2.toLowerCase()
					)}
				/>
			</div>
		</>
	);
}