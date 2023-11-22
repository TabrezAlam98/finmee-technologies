import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.main}>
        <div className={style.imgBox}>
            <img src="https://gccirsymposium.innoget.com/gccir/img/ntwist-logo.png"/>
        </div>
        <div className={style.links}>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact US</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
        </div>
        <p className={style.footerPara}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <div className={style.logos}>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        </div>

    </div>
  )
}

export default Footer