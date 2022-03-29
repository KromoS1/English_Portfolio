import React from "react";
import style from '../../styles/homeStyles.module.scss'

export const Home = () => {
    return (
        <section id={'home'} className={style.sectionBox}>
           <div  className={style.container}>
               <div className={style.homeBox}>
                   <div className={style.info}>
                       <div className={style.typeBox}>
                           <h1>Дарья Раковская</h1>
                           <p>I design and develop services for customers of all sizes,
                               specializing in creating stylish, modern websites, web
                               services and online stores.</p>
                       </div>
                   </div>
                   <div className={style.photo}>photo</div>
               </div>
           </div>
        </section>
    )
}