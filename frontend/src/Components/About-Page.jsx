import React from "react";
import RotatingBox from "../Animation/Rotation";

const AboutPage = () => {
  const about = "./images/photo_2022-11-17_15-57-49.jpg";
  return (
    <div className="bg-navy min-h-screen flex flex-col justify-center items-center font-mono text-white">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center p-5">
          <div className="md:w-1/3 mb-6 md:mb-0 z-40 pl-10">
            <RotatingBox imageSrc={about} />
          </div>
          <div className="md:w-2/3 md:ml-12 text-justify z-30 p-10 content-center">
            <h1 className="text-3xl font-semibold mb-4">About Me</h1>
            <p className="mb-6 text-lg">
              Hello! I'm Mihir, and I like coding and technology.
            </p>
            <p className="mb-6 text-lg">
              Just like everyone, I'm floating through the boundless expanse of
              the cosmos on this tiny blue dot, pondering my existence and
              consciousness.
            </p>
            <p className="mb-6 text-lg">
              Meanwhile, I am currently studying full-time for a Master's degree
              in Computer Science at Stevens Institute of Technology in Hoboken,
              New Jersey.
            </p>
            <p className="mb-6 text-lg">
              When I'm not engrossed in university life, I'm dedicated to
              working on full-stack projects and exploring the latest
              technologies. This website is a showcase of one such project that
              I've developed.
            </p>
            <p className="mb-6 text-lg">
              My primary tech stack includes React for frontend development,
              along with Tailwind for styling, and Express/Node for backend
              development. While this website utilizes MongoDB, I'm equally
              proficient with PostgreSQL and Redis. My experience extends to
              languages like C++ and Python, with experience in data science and
              computer vision. Additionally, I have a strong inclination towards
              Java for non-web coding endeavors.
            </p>
            <p className="mb-6 text-lg">
              I excel in coding and full-stack development. Feel free to explore
              some of the projects I've undertaken to witness my skills in
              action.
            </p>
            <p className="mb-6 text-lg">
              Ready to collaborate or have a project in mind? Feel free to get
              in touch. Let's work together to ideas to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
