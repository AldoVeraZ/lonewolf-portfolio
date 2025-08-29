import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("aestebanveraz@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Aldo.</p>
              <p className="grid-subtext">
                I’m a Software Engineer and Full Stack Web Developer, trained in
                React, Node.js, and MongoDB. I’ve built projects ranging from
                e-commerce platforms to web management systems, and I’m eager to
                keep growing in the tech industry.
              </p>
            </div>
          </div>
        </div>
        {/* Span 1 End */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in the MERN stack (MongoDB, Express, React,
                Node.js) with JavaScript, and have secondary experience in PHP
                and MySQL.
              </p>
            </div>
          </div>
        </div>
        {/* Span 2 End */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[
                //   {
                //     lat: 40,
                //     lng: -100,
                //     text: "I'm here!",
                //     color: "white",
                //     size: 20,
                //   },
                // ]}
              />
            </div>
            <div>
              <p className="grid-headtext">Remote Work</p>
              <p className="grid-subtext">
                Based in Chile, available for remote work across multiple time
                zones.
              </p>
              <a href="#contact">
                <Button
                  name="Contact me"
                  isBeam
                  containerClass="w-full mt-10"
                  id="contact"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Span 3 End */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">What I Enjoy Most About Coding</p>
              <p className="grid-subtext">
                I enjoy building full-stack web applications and learning new
                technologies. Coding isn’t just a job – it’s a way for me to
                create and grow as a developer.
              </p>
            </div>
          </div>
        </div>
        {/* Span 4 End */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  aestebanveraz@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
