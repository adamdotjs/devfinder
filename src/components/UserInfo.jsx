const UserInfo = ({ user }) => {
	const stats = [
		{
			title: 'Repos',
			value: user.public_repos || 'N/A',
		},
		{
			title: 'Followers',
			value: user.followers || 'N/A',
		},
		{
			title: 'Following',
			value: user.following || 'N/A',
		},
	];

	return (
		<>
			<p className="leading-6">{user.bio}</p>
			<div className="flex items-center justify-between | py-6 px-8 | bg-zircon dark:bg-bigstone | rounded-xl ">
				{stats.map((stat) => (
					<div className="flex flex-col | text-center sm:text-left">
						<h3 className="text-[11px] sm:text-[13px] leading-tight">{stat.title}</h3>
						<p className="text-base sm:text-[22px] font-bold text-ebony dark:text-white leading-tight mt-2">
							{stat.value}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default UserInfo;
