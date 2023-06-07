"use client";

import Image from "next/image";
import LeaderCard from "./LeaderCard/LeaderCard";
import { leaders } from "./leaders";

const About = () => {
  return (
    <main>
      <section className="px-8 md:px-10 lg:px-[165px] flex gap-[100px]  py-[100px] lg:py-[200px]">
        <div>
          <h2 className="font-bold text-5xl leading-[52px] -tracking-[1.71px] lg:text-7xl lg:leading-[64px] lg:-tracking-[2px]">
            Our
            <br />
            Heritage
          </h2>
          <div className="grid gap-9 font-medium text-darkGray">
            <p className="pt-9 md:pt-[85px] lg:pt-[74px]">
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </p>
            <p>
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </p>
            <p>
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/assets/about/desktop/image-heritage.jpg"
            width={540}
            height={568}
            alt=""
            className="min-w-[540px] min-h-[568px]"
          />
        </div>
      </section>

      <section className="lg:flex gap-[146px] px-8 md:px-10 lg:px-[165px]">
        <h2 className="pb-16 lg:pb-0 font-bold text-5xl leading-[52px] -tracking-[1.71px] lg:text-7xl lg:leading-[64px] lg:-tracking-[2px]">
          The <br />
          Leaders
        </h2>
        <div className="grid gap-y-[79px] md:grid-cols-2 md:gap-y-[100px] md:gap-x-[11px] lg:gap-y-[71px] lg:gap-x-[30px]">
          {leaders.map(({ name, jobTitle, image, id }) => (
            <LeaderCard
              key={id}
              name={name}
              jobTitle={jobTitle}
              image={image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
