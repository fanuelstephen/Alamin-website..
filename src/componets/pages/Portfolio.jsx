import React, { useState } from "react";
import { portfolio } from "../data/dummydata";
import { Visibility } from "@mui/icons-material";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];
const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);

    if (category === "all") {
      setList(portfolio);
    }
  };
  return (
    <>
      <article>
        <div className="container">
          <div className="catButton">
            {category.map((category) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="content grid3">
            {list.map((item) => {
              return (
                <>
                  <div className="box" data-aos="fade-up">
                    <div className="img">
                      <img src={item.cover} alt="" />
                    </div>
                    <div className="overlay">
                      <h3>{item.title}</h3>
                      <span>{item.name}</span>
                      <Visibility />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
};

export default Portfolio;
