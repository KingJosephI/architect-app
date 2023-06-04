import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="flex items-center px-8 justify-between md:justify-start  lg:px-[165px] py-8 md:py-14 md:px-24">
      {/* <div> */}
      <Link href="/">
        <Image
          src="/assets/logo-black.svg"
          alt="logo"
          width={77}
          height={32.03}
        />
      </Link>
      {/* </div> */}

      <ul className="hidden md:flex md:items-center md:gap-6 md:pl-[95px]">
        <li>
          <Link
            href="/portfolio"
            className="text-lg text-mediumGrey font-bold hover:text-veryDarkBlue"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-lg text-mediumGrey font-bold hover:text-veryDarkBlue"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-lg text-mediumGrey font-bold hover:text-veryDarkBlue"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="md:hidden">
        <RxHamburgerMenu className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
