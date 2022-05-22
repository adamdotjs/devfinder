const UserHeader = ({ user }) => {
	const { name, login, created_at } = user;

	return (
		<div className="lg:flex justify-between">
			<div>
				<h2 className="text-base sm:text-2xl font-bold | text-ebony dark:text-white">{name}</h2>
				<p className="sm:mt-1 | sm:text-lg | text-azure ">@{login}</p>
			</div>
			<p className="mt-1 | text-lynch dark:text-white">
				Joined {new Date(created_at).toLocaleDateString()}
			</p>
		</div>
	);
};

export default UserHeader;
