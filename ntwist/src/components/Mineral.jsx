import React from "react";
import style from './Optimize.module.css'

const Optimize = () => {
  return (
    <div className={style.contain}>
      <div className={style.box1}>
        <p className={style.p1}>Mineral Processing</p>
        <p className={style.p2}>
        NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.
        </p>
        <button className={style.btn1}>Read More</button>
      </div>
      <div className={style.box2}>
        <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"/>
      </div>
    </div>
  );
};

export default Optimize;
