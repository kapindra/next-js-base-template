import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const Header = () => {
  return (
    <>
      <header
        className="shadow dark:shadow-gray-700 w-full bg-white dark:bg-gray-800 fixed"
        aria-label="Site Header"
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <Image src={Logo} className="h-8 w-8" alt="Kapindra Logo" />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-md">
                  <li>
                    <Link
                      className="text-gray-500 dark:text-gray-300 transition hover:text-cyan-300 dark:hover:text-cyan-300"
                      href="/"
                    >
                      Frontend
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 dark:text-gray-300 transition hover:text-cyan-300 dark:hover:text-cyan-300"
                      href="/"
                    >
                      Design
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
