import React from "react";
import style from "./Optimize.module.css";

const Optimize = () => {
  return (
    <div className={style.contain}>
      <div className={style.box2}>
        <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg" />
      </div>
      <div className={style.box1}>
        <p className={style.p1}>Sustainability</p>
        <p className={style.p2}>
          Environmental stewardship is a priority for NTWIST. We help our
          customers to minimize their sustainability impact on the planet.
          Emissions or environmental targets are used alongside productivity
          targets to define success for our customers.
        </p>
        <p className={style.p2}>
          With the increasing relevance of carbon accounting and emissions
          tracking, NTWIST offers a suite of tools to increase visibility into
          environmental performance and help processing plants track, manage,
          optimize, and report key metrics.
        </p>
        <button className={style.btn1}>Read More</button>
      </div>
    </div>
  );
};

export default Optimize;
