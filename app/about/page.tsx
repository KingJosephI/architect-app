"use client";

import LeaderCard from "./LeaderCard/LeaderCard";

const About = () => {
  const leaders = [
    {
      id: 1,
      name: "Jake Rochards",
      jobTitle: "Chief Architect",
      image: "/assets/about/desktop/avatar-jake.jpg",
    },
    {
      id: 2,
      name: "Thompson Smith",
      jobTitle: "Head of Finance",
      image: "/assets/about/desktop/avatar-thompson.jpg",
    },
    {
      id: 3,
      name: "Jackson Rourke",
      jobTitle: "Lead Designer",
      image: "/assets/about/desktop/avatar-jackson.jpg",
    },
    {
      id: 4,
      name: "Maria Simpson",
      jobTitle: "Senior Architect",
      image: "/assets/about/desktop/avatar-maria.jpg",
    },
  ];
  return (
    <main>
      <h1>About Page</h1>
      <section>
        <h2 className="font-bold text-5xl leading-[52px] -tracking-[1.71px]">
          The <br />
          Leaders
        </h2>
        <div>
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
