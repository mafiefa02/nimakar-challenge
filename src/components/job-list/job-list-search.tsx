import { Input } from "-/components/shadcn/input";
import { parseAsString, useQueryState } from "nuqs";

export const JobListSearch = () => {
	const [search, setSearch] = useQueryState(
		"search",
		parseAsString.withDefault(""),
	);

	return (
		<Input
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			placeholder="Search by job details"
		/>
	);
};
