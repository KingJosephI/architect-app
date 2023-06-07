"use client";

import LeaderCard from "./LeaderCard/LeaderCard";
import { leaders } from "./leaders";

const About = () => {
  return (
    <main>
      <h1>About Page</h1>
      <section className="lg:flex gap-[146px] px-8 md:px-10 lg:px-[165px]">
        <h2 className="pb-16 lg:pb-0 font-bold text-5xl leading-[52px] -tracking-[1.71px]">
          The <br />
          Leaders
        </h2>
        <div className="grid gap-y-[79px] md:grid-cols-2 md:gap-y-[100px] md:gap-x-[11px]">
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
