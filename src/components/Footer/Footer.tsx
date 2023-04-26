import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <footer className="px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
          <div className="col-span-3">
            <Link
              href="#"
              title="Hellonext Home Page"
              className="flex items-center"
            >
              <Image src={Logo} alt="Kapindra Logo" width={50} height={50} />
              <span className="sr-only">Kapindra Logo</span>
            </Link>
            <p className="my-4 text-xs leading-normal text-gray-600 dark:text-gray-400">
              A blog created for you with <strong>&#x2764;</strong> from{' '}
              <Link
                href="https://kapindra.com.np"
                className="underline"
                target="_blank"
              >
                me
              </Link>
              .
            </p>
          </div>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Product
            </p>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Features
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Feedback
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              FAQs
            </Link>
          </nav>
          <nav className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Support
            </p>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Chat
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              {' '}
              Email Support{' '}
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              GDPR
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              {' '}
              Help{' '}
            </Link>
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Resources
            </p>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Blog
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              {' '}
              Twitter{' '}
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Alternatives
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Why feature vote?
            </Link>
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Company
            </p>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              About Us
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="flex mb-3 text-sm font-medium dark:text-gray-500 transition md:mb-2 hover:text-cyan-300 dark:hover:text-cyan-300"
              href="#"
            >
              Status
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 dark:border-gray-700 md:flex-row md:items-center">
          <p className="mb-2 text-xs text-left text-gray-600 dark:text-gray-500 md:mb-0">
            Knowledge sharing blog
          </p>
          <p className="mb-0 text-xs text-left text-gray-600 dark:text-gray-500 md:mb-0">
            Copyright &copy; 2023 Kapindra
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
