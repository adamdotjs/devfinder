const Avatar = ({ user }) => {
	return (
		<div className="w-[70px] h-[70px] sm:w-[117px] sm:h-[117px] bg-lynch |  rounded-full | overflow-hidden">
			<img src={user.avatar_url} alt={`Picture of ${user.name}`} />
		</div>
	);
};

export default Avatar;
