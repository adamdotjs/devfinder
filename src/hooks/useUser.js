import useSWR from 'swr';

const fetcher = async (url) => {
	const response = await fetch(url);

	if (!response.ok) {
		const error = new Error('No results');
		throw error;
	}
	return response.json();
};

export const useUser = (userName) => {
	const { data, error } = useSWR(() => `https://api.github.com/users/${userName}`, fetcher, {
		shouldRetryOnError: false,
	});

	return {
		user: data,
		isLoading: !error && !data,
		error,
	};
};
