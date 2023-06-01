"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="pb-12 md:pb-0 bg-veryLightGrey md:bg-white flex flex-col items-center gap-8 md:flex-row">
      <div className="md:flex md:items-center md:bg-veryLightGrey md:w-5/6">
        <Link href="/">
          <div className="-mt-12 md:mt-0 w-32 h-32 bg-veryDarkBlue grid place-content-center">
            <Image
              src="/assets/logo.svg"
              alt="Website logo"
              width={58}
              height={24.13}
            />
          </div>
        </Link>
        <ul className="flex flex-col items-center justify-center mt-5 md:mt-0 gap-6 md:flex-row md:ml-8">
          <li>
            <Link
              href="/portfolio"
              className="font-bold text-darkGray hover:text-veryDarkBlue"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-bold text-darkGray hover:text-veryDarkBlue"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-bold text-darkGray hover:text-veryDarkBlue"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:-ml-24 flex py-4 px-8 w-64 bg-veryDarkBlue hover:bg-darkGray text-white items-center justify-between cursor-pointer transition">
        <Link href="/portfolio" className=" font-bold">
          See Our Portfolio
        </Link>
        <BsArrowRight color="white" size={25} />
      </div>
    </footer>
  );
};

export default Footer;
