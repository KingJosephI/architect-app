"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-veryLightGrey flex flex-col items-center gap-8">
      <div className="w-32 h-32 bg-veryDarkBlue grid place-content-center">
        <Image
          src="/assets/logo.svg"
          alt="Website logo"
          width={58}
          height={24.13}
        />
      </div>
      <ul className="grid gap-6">
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
      <div className="flex py-4 px-8 w-64 bg-veryDarkBlue hover:bg-darkGray text-white items-center justify-between cursor-pointer transition">
        <Link href="/porfolio" className=" font-bold">
          See Our Portfolio
        </Link>
        <BsArrowRight color="white" size={25} />
      </div>
    </footer>
  );
};

export default Footer;
