import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
const Header = () => {
  return (
    <>
      <div>
        <div className="container mx-auto flex justify-between px-3 lg:px-4 py-4">
          <p className="dark:text-white text-2xl font-medium">LOGO</p>
          <div className="flex items-center divide-x">
            <a
              href="https://kapindra.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto pr-4 dark:text-white"
            >
              I am here!
            </a>
            <div className="pl-4">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
