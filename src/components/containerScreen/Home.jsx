import React from "react";
import style from '../../styles/homeStyles.module.scss';
import mainPhoto from '../../img/mainPhoto.png';

export const Home = () => {
    return (
        <section id={'home'} className={style.sectionBox}>
           <div  className={style.container}>
               <div className={style.homeBox}>
                   <div className={style.info}>
                       <div className={style.typeBox}>
                           <h1><b>Open Mind English</b></h1>
                           <h2>Онлайн-школа английского языка</h2><br/>
                           <p>Здесь вы получите мощную языковую практику с результатом уже в первый месяц, подготовитесь к любому экзамену, получая удовольствие от каждого урока.</p>
                       </div>
                   </div>
                   <div className={style.photo}>
                       <img src={mainPhoto} className={style.mainPhoto} alt="#"/>
                   </div>
               </div>
           </div>
        </section>
    )
}