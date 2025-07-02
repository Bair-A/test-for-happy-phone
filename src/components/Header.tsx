import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import { NAVIGATION_LINKS } from '@/constants/constants';

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between bg-white px-8 shadow-md">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/logo.webp"
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <div className="flex flex-col text-xl leading-tight font-bold sm:flex-col sm:text-xl sm:leading-tight">
          <span>Happy Phone</span>
          <span className="text-xs sm:text-sm">test task todo list</span>
        </div>
      </Link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full sm:block sm:w-auto" id="navbar-default">
        <nav>
          <ul className="flex gap-6">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink key={link.text} text={link.text} href={link.href} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
