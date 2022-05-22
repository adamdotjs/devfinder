import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-[26px] font-bold leading-tight | text-black dark:text-white">
        devfinder
      </h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
