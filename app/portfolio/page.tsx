"use client";

import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { portfolioData } from "./data";

const Portfolio = () => {
  return (
    <main>
      <h1>Portfolio Page</h1>
      <section className="grid gap-6 pb-32 place-items-center lg:grid-cols-3 lg:px-[165px]">
        {portfolioData.map(({ title, date, image, id }) => (
          <PortfolioCard key={id} title={title} date={date} image={image} />
        ))}
      </section>
    </main>
  );
};

export default Portfolio;
