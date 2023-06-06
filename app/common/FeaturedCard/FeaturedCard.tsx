interface ICoverImage {
  desktop: string;
  tablet: string;
  mobile: string;
}

interface IPortfolioCard {
  title: string;
  image: ICoverImage;
  number: number;
}

const FeaturedCard = ({ title, number, image }: IPortfolioCard) => {
  return (
    <article className="relative hover:cursor-pointer">
      <picture>
        <source media="(min-width:1024px)" srcSet={image.desktop} />
        <source media="(min-width:768px)" srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt="Porfolio Cover Illustration"
          className="w-screen hover:opacity-80 lg:w-[354px] lg:h-[560px]"
        />
      </picture>
      <div className="absolute bottom-8 left-6">
        <h2 className="font-bold text-white text-[32px] leading-10">{title}</h2>
        <span className="font-medium text-white/80 text-[18px] leading-6">
          View All Projects
        </span>
      </div>
      <span className="absolute top-0 -right-0 lg:-right-7 hidden md:block text-[200px] leading-[200px] -tracking-[5px] font-bold text-[#ffffff9c]">
        {number}
      </span>
    </article>
  );
};

export default FeaturedCard;
