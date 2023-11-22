import React from "react";
import style from "./Optimize.module.css";

const Optimize = () => {
  return (
    <div className={style.contain}>
      <div className={style.box2}>
        <img src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png" />
      </div>
      <div className={style.box1}>
        <p className={style.p1}>Oil & Gas</p>
        <p className={style.p2}>
          Oil and Gas plants require a high level of control and robustness in
          their operation due to the high risks to people and environment.
        </p>
        <p className={style.p2}>
          NTWIST helps Oil & Gas customers to analyze historical data, identify
          opportunities for process control improvements, and reduce variability
          in any part of the process, thus providing enhanced reliability and
          safety.
        </p>
        <button className={style.btn1}>Read More</button>
      </div>
    </div>
  );
};

export default Optimize;
