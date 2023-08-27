import React from "react";
import { social } from "../data/dummydata";

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => {
          return (
            <>
              <i data-aos="zoom-in-left">{item.icon}</i>
            </>
          );
        })}
        <p data-aos="zoom-in-right">All right reserved</p>
      </footer>
    </>
  );
};

export default Footer;
