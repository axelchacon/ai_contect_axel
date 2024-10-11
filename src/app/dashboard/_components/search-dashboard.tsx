import { Auth } from "@/components/auth";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchDashboard = ({
	onSearchInput,
}: {
	onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
	return (
		<div className="mx-5 py-2">
			<div className="flex md:flew-row gap-2 mt-5 py-6 px-4 bg-white rounded">
				<div className="flex items-center p-2 border gap-2 bg-white rounded-full w-full md:w-[20%]">
					<SearchIcon />
					<input
						type="text"
						placeholder="Search..."
						className="bg-transparent outline-none text-black"
						onChange={(e) => onSearchInput(e.target.value)}
					/>
				</div>
				<div className="ml-auto">
					<Auth />
				</div>
			</div>
		</div>
	);
};

export default SearchDashboard;
