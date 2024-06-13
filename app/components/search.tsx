import {
	Command,
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import CountryCard from "./CountryCard";

export function ShadSearch(props: { nameArr: Array<string> }) {
	return (
		<div className="w-full h-full">
			<Command className="flex flex-col items-center justify-center max-w-auto max-h-auto">
				<CommandInput placeholder="Type to search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{props.nameArr.map((name) => (
						<CommandItem key={name}>
							<CountryCard name={name} />
						</CommandItem>
					))}
				</CommandList>
			</Command>
		</div>
	);
}