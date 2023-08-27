import React from "react";
import Typewriter from "typewriter-effect";

const home = [
  {
    text: "Heloo I'am",
    name: "fanuel Stephen",
    post: "WEB DESIGNER",
    design: "UI / UX DESIGNER",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];
const Hero = () => {
  return (
    <>
      <div className="hero">
        {home.map((val, i) => {
          return (
            <>
              <div className="heroContainer" key={i}>
                <h3 data-aos="fade-right">{val.text}</h3>
                <h1>
                  <Typewriter
                    options={{
                      strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p data-aos="fade-left">{val.desc}</p>
                <button className="primaryBtn" data-aos="fade-up-right">
                  Download CV
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Hero;
