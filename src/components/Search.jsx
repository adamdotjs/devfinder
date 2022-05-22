import { useState } from 'react';

const Search = ({ handleSubmit }) => {
	const [search, setSearch] = useState('');

	return (
		<form
			className="flex | rounded-2xl mt-5 p-2 pl-4 md:pl-8 | bg-darkwhite dark:bg-cloudburst | shadow-block dark:shadow-none"
			onSubmit={(e) => {
				handleSubmit(e, search);
				setSearch('');
			}}
		>
			<div className="flex items-center | gap-2 md:gap-4 mr-auto | w-full">
				<div className="w-5 h-5">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="fill-azure"
					>
						<path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" />
					</svg>
				</div>

				<input
					placeholder="Search GitHub username&hellip;"
					className="relative | w-full | md:text-lg | bg-transparent placeholder:text-kashmir dark:placeholder:text-white"
					name="username"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<button className="py-3 px-4 md:px-5 rounded-[10px] | text-sm md:text-base font-bold | bg-azure text-white hover:bg-[#60ABFF] | transition-colors">
				Search
			</button>
		</form>
	);
};

export default Search;
