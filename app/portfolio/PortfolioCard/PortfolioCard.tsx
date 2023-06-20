"use client";

import styles from "./PortfolioCard.module.css";
interface ICoverImage {
  desktop: string;
  tablet: string;
  mobile: string;
}

interface IPortfolioCard {
  title: string;
  date: string;
  image: ICoverImage;
}

const PortfolioCard = ({ title, date, image }: IPortfolioCard) => {
  return (
    <article className="relative hover:cursor-pointer">
      <picture>
        <source media="(min-width:1024px)" srcSet={image.desktop} />
        <source media="(min-width:768px)" srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt="Porfolio Cover Illustration"
          className={`${styles.image} hover:opacity-80 w-screen`}
          loading="lazy"
        />
      </picture>
      <div className="absolute bottom-8 left-6">
        <h2 className="font-bold text-white text-[32px] leading-10">{title}</h2>
        <span className="font-medium text-white/80 text-[18px] leading-6">
          {date}
        </span>
      </div>
    </article>
  );
};

export default PortfolioCard;
