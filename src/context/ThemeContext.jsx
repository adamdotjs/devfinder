import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
	//check for system theme preference
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	//if false, use light mode
	const [theme, setTheme] = useState(prefersDark);

	const toggleTheme = () => setTheme(!theme);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
