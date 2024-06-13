import { fetchCountries, useCountries } from "@/queries/useCountries";
import Header from "./components/header";
import { ShadSearch } from "./components/search";
import Countries from "@/components/Countries";
{/* @ts-expect-error Server Component */}
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";

export default async function Home() {
	//const res = await fetch("https://restcountries.com/v3.1/all");
	//const countries = await res.json();
	//const countriesSorted = countries.sort((a: any, b: any) =>
	//	a.name.common.localeCompare(b.name.common)
	//);

	const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['countries'], queryFn: fetchCountries })
  const dehydratedState = dehydrate(queryClient)

	return (
		<>
			<header className='z-10 sticky top-0 w-full'>
				<Header />
			</header>
			<div className="flex flex-col h-full w-full items-center bg-white">    
				<Hydrate state={dehydratedState}>
					<Countries />
				</Hydrate>
			</div>
		</>
	);
}