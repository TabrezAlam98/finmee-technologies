import React from "react";
import style from './Optimize.module.css'

const Optimize = () => {
  return (
    <div className={style.contain}>
      <div className={style.box1}>
        <p className={style.p1}>Mine-To-Mill-To-Mine Optimization</p>
        <p className={style.p2}>
          NTWIST’s newest product unlocks up to $250/oz in previously
          inaccessible value in open pit gold mines by connecting siloed data
          sources like block models, fleet management systems, stockpile
          surveys, and plant instruments. This allows your company to better
          track material flow, and feed properties, identify plan/production
          discrepancies, and correct resource models and production plans.
        </p>
        <button className={style.btn1}>Read More</button>
      </div>
      <div className={style.box2}>
        <img src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg" />
      </div>
    </div>
  );
};

export default Optimize;
