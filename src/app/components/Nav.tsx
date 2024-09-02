import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import NavLink from "./nav/NavLink";

import useSearchModal from "../hooks/useSearchModal";
import { iconMapping } from "../utils/iconMapping";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { showSearchModal } = useSearchModal();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between bg-white z-10 w-full xl:absolute p-4 py-2 sm:px-8 lg:px-12 2xl:px-44">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex">
          <Image
            src="/images/logo-company.webp"
            width={90}
            height={40}
            priority={true}
            alt="Logo Builder Company"
          />
        </Link>

        <FontAwesomeIcon
          icon={iconMapping.faBars}
          onClick={toggleMenu}
          className="lg:invisible text-2xl py-2 px-4 text-white bg-amber-400 cursor-pointer lg:hidden"
        />
      </div>

      <nav
        className={`flex-col justify-center tracking-widest mt-4 lg:m-0 ${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 w-full uppercase text-lg">
          <NavLink href="/">Home</NavLink>

          <NavLink href="#aboutus">About Us</NavLink>

          <NavLink href="#projects">Projects</NavLink>

          <NavLink href="#ourservices">Services</NavLink>

          <NavLink href="#contact">Contact</NavLink>

          <span className="w-full h-1 lg:w-1 lg:h-3/4 bg-slate-100"></span>

          <div className="flex justify-between items-center lg:gap-10">
            <button onClick={showSearchModal} aria-label="Search">
              <FontAwesomeIcon
                icon={iconMapping.faMagnifyingGlass}
                className="text-xl duration-200 hover:text-amber-400"
              />
            </button>

            <Link
              href="#contact"
              className="py-2 px-3 normal-case border-4 border-amber-400 bg-white hover:bg-amber-400 text-black hover:text-white duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
