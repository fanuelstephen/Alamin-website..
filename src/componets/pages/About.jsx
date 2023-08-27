import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/dummydata";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flexsb">
          {about.map((val, i) => {
            return (
              <>
                <div className="left">
                  <img src={val.cover} alt="" data-aos="fade-down-right" />
                </div>
                <div className="right" data-aos="fade-down-left">
                  <Heading title="about me" />
                  <p>{val.desc}</p>
                  <p>{val.desc1}</p>
                  <button>Download CV</button>
                  <button className="primaryBtn">Download CV</button>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
