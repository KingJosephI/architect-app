import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

interface ILeaderCard {
  name: string;
  jobTitle: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const LeaderCard = ({
  name,
  jobTitle,
  image,
  linkedin = "https://www.linkedin.com/in/joseph-kabemba/",
  twitter = "https://twitter.com/kabemba_jo",
}: ILeaderCard) => {
  return (
    <article>
      <div className="relative w-full max-w-[311px] group">
        <Image src={image} alt={name} width={311} height={284} />
        <div className="absolute w-full h-full inset-0 hidden duration-75 group-hover:flex items-center justify-center gap-4  text-2xl bg-veryDarkBlue/60 text-white ">
          <Link href={linkedin} className="hover:text-[#0072b1]">
            <BsLinkedin />
          </Link>
          <Link href={twitter} className="hover:text-[#1DA1F2]">
            <BsTwitter />
          </Link>
        </div>
      </div>
      <div className="pt-[15px]">
        <h3 className="font-bold text-[32px] leading-10">{name}</h3>
        <p className="font-medium text-lg text-veryDarkBlue/80">{jobTitle} </p>
      </div>
    </article>
  );
};

export default LeaderCard;
