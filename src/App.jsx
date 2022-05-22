import { useContext, useState } from 'react';
import Header from './components/Header';
import { ThemeContext } from './context/ThemeContext';
import Search from './components/Search';
import UserHeader from './components/UserHeader';
import UserInfo from './components/UserInfo';
import UserLinks from './components/UserLinks';
import Avatar from './components/Avatar';
import { useUser } from './hooks/useUser';

const App = () => {
	const { theme } = useContext(ThemeContext);
	const [searchValue, setSearchValue] = useState('octocat');
	const { user, isLoading, error } = useUser(searchValue);

	const handleSubmit = (e, input) => {
		e.preventDefault();
		setSearchValue(input);
	};

	return (
		<div className={theme ? 'dark' : 'light'}>
			<div className=" | min-h-screen | py-9 px-6 | bg-zircon text-kashmir dark:bg-bigstone dark:text-white">
				<div className="flex flex-col | max-w-xl lg:max-w-[730px] | gap-4 sm:gap-6 mx-auto md:mt-36">
					<Header />
					<Search handleSubmit={handleSubmit} />
					<section className="grid lg:grid-cols-[117px_1fr] | gap-6 px-6 py-8 sm:p-12 sm:gap-8 | bg-darkwhite dark:bg-cloudburst | shadow-block dark:shadow-none | rounded-xl">
						{error && (
							<div className="mr-4 | text-sunset whitespace-nowrap font-bold">No results</div>
						)}
						{isLoading && <p>Loading user...</p>}
						{user && (
							<>
								<div className="col-span-full | grid grid-cols-[min-content_1fr] items-center lg:items-start | gap-4 sm:gap-9">
									<Avatar user={user} />
									<UserHeader user={user} />
								</div>
								<div className="col-span-full lg:col-start-2 | flex flex-col | gap-6 sm:gap-9 lg:-mt-16">
									<UserInfo user={user} />
									<UserLinks user={user} />
								</div>
							</>
						)}
					</section>
				</div>
			</div>
		</div>
	);
};

export default App;
