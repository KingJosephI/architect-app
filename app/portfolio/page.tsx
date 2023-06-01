"use client";

import PortfolioCard from "./PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <main>
      <h1>Portfolio Page</h1>
      <section>
        <PortfolioCard
          title="Eebox Building"
          date="August 2021"
          image={{ desktop: "", tablet: "", mobile: "" }}
        />
      </section>
    </main>
  );
};

export default Portfolio;
