import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { portfolioData } from "./data";

export const metadata = {
  title: "Architect Studio | Portfolio",
  description: "Architecture Projects List",
};

const Portfolio = () => {
  return (
    <main>
      <section className="grid gap-6 pb-32 place-items-center lg:grid-cols-3 md:px-[40px] lg:px-[165px]">
        {portfolioData.map(({ title, date, image, id }) => (
          <PortfolioCard key={id} title={title} date={date} image={image} />
        ))}
      </section>
    </main>
  );
};

export default Portfolio;
