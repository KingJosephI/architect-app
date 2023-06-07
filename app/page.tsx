"use client";
import { FeaturedCard } from "./common";
import { portfolioData } from "./portfolio/data";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`text-veryDarkBlue`}>
      <section className="relative md:mx-10 lg:mx-[165px]">
        <article className="absolute text-white top-[115px] md:top-[185px] md:bottom-[185px] left-[34px] md:left-[61px] lg:top-[100px] lg:left-[194px] lg:w-1/2">
          <h1 className="text-5xl font-bold leading-[48px] -tracking-[1.2px] md:text-8xl md:leading-[80px] md:-tracking-[2px] pb-10 w-1/2">
            Project Paramour
          </h1>
          <p className="pb-[83px] mr-4 md:mr-0 lg:pb-[41px] md:w-1/2 lg:w-3/4">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>

          <Link href="/portfolio" className=" font-bold text-[18px] leading-6">
            <div className="hover:cursor-pointer hover:bg-darkGray px-10 py-5 flex gap-2 items-center bg-veryDarkBlue text-white w-fit">
              See Our Portfolio
              <BsArrowRight className="text-2xl" />
            </div>
          </Link>
        </article>
        <picture className="block">
          <source
            media="(min-width:1024px)"
            srcSet="/assets/home/desktop/image-hero-paramour.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="/assets/home/tablet/image-hero-paramour.jpg"
          />
          <img
            src="/assets/home/mobile/image-hero-paramour.jpg"
            alt="Porfolio Cover Illustration"
            // width="350px"
            // height="568px"
            className="w-screen"
          />
        </picture>
      </section>

      {/* Seraph Station The Seraph Station project challenged us to
      design a unique station that would transport people through time. The
      result is a fresh and futuristic model inspired by space stations. See Our
      Portfolio Federal II Tower A sequel theme project for a tower originally
      built in the 1800s. We achieved this with a striking look of brutal
      minimalism with modern touches. See Our Portfolio Trinity Bank Tower
      Trinity Bank challenged us to make a concept for a 84 story building
      located in the middle of a city with a high earthquake frequency. For this
      project we used curves to blend design and stability to meet our
      objectives. See Our Portfolio
      
      01 02 03 04 */}
      <section className="px-8 md:px-10 lg:px-[165px] py-32">
        <h2 className="hidden md:block -mb-12 lg:-mb-28 font-bold text-[120px] lg:text-[250px] leading-[200px] -tracking-[3px] lg:-tracking-[5px] text-veryLightGrey">
          Welcome
        </h2>
        <section className="flex gap-[125px] items-end">
          <article className="lg:w-1/2 lg:pl-[100px]">
            <h3 className="font-bold pb-8 text-5xl leading-[52px] -tracking-[1.71px] md:text-7xl md:leading-[64px] md:-tracking-[2px] ">
              Welcome to Arch Studio
            </h3>
            <div className="grid gap-7 text-lg leading-6 font-medium text-darkGray">
              <p>
                We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
              </p>
              <p>
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
              </p>
              <p>
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </p>
            </div>
          </article>
          <picture className="hidden lg:block -z-10">
            <source
              media="(min-width:1024px)"
              srcSet="/assets/home/desktop/image-welcome.jpg"
            />
            <source
              media="(min-width:768px)"
              srcSet="/assets/home/tablet/image-welcome.jpg"
            />
            <img
              src="/assets/home/mobile/image-welcome.jpg"
              alt="Porfolio Cover Illustration"
              width="350px"
              height="568px"
              // className="hover:opacity-80 w-screen"
            />
          </picture>
        </section>
      </section>
      <section className="relative md:mx-[40px] lg:mx-[165px] pb-[100px]">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/assets/home/desktop/image-small-team.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="/assets/home/tablet/image-small-team.jpg"
          />
          <img
            src="/assets/home/mobile/image-small-team.jpg"
            alt="Porfolio Cover Illustration"
            className="w-screen"
          />
        </picture>
        <article className="absolute bottom-[35%] left-8 md:left-[58px] lg:left-[180px] grid gap-3">
          <h2 className="text-white font-bold text-5xl -tracking-[2px] leading-[52px] md:text-7xl md:leading-[64px] pb-6">
            <div>Small team,</div>
            big ideas
          </h2>
          <Link href="/about" className="font-bold text-[18px] leading-6">
            <div className="hover:cursor-pointer hover:bg-darkGray px-10 py-5 flex gap-2 items-center bg-veryDarkBlue text-white w-fit">
              About Us
              <BsArrowRight className="text-2xl" />
            </div>
          </Link>
        </article>
      </section>
      <section className="grid px-8  md:px-[40px] lg:px-[165px]">
        <div className="flex justify-between pb-16">
          <h2 className="font-bold text-5xl leading-[52px] -tracking-[1.71px]">
            Featured
          </h2>
          <div className="hidden hover:cursor-pointer hover:bg-darkGray px-10 md:flex gap-2 items-center bg-veryDarkBlue text-white">
            <Link href="/portfolio" className="font-bold text-[18px] leading-6">
              See all
            </Link>
            <BsArrowRight className="text-2xl" />
          </div>
        </div>

        <section className="grid gap-6 place-items-center lg:grid-cols-3 ">
          <FeaturedCard
            title="Project Del Sol"
            image={portfolioData[3].image}
            number={1}
          />
          <FeaturedCard
            title="228B Tower"
            image={portfolioData[5].image}
            number={2}
          />
          <FeaturedCard
            title="Le Prototype"
            image={portfolioData[4].image}
            number={3}
          />
        </section>

        <div className="md:hidden hover:cursor-pointer hover:bg-darkGray mt-6 mb-32 px-10 py-5 flex gap-2 items-center justify-center bg-veryDarkBlue text-white">
          <Link href="/portfolio" className="font-bold text-[18px] leading-6">
            See all
          </Link>
          <BsArrowRight className="text-2xl" />
        </div>
      </section>
    </main>
  );
}
