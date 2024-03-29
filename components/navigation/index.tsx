import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useRouter();

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex flex-wrap items-center m-3 pb-3 border-b">
        {pathname !== "/" && (
          <Link className="inline-flex items-center px-2 mr-4" href="/">
            <span className="text-xl font-bold tracking-wide fancy-font relative top-2">
              colin.
            </span>
          </Link>
        )}

        <button
          aria-label="Colin Harris menu options"
          className="inline-flex p-3 hover:bg-[#f45d48] rounded lg:hidden ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto gap-2 lg:pr-3">
            <Link
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-[#f45d48] hover:text-white "
              href="/"
              onClick={handleClick}
            >
              Home
            </Link>
            <Link
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-[#f45d48] hover:text-white"
              href="/work"
              onClick={handleClick}
            >
              Work
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
