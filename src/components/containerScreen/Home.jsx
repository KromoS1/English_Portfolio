import React from "react";
import style from '../../styles/homeStyles.module.scss';
import mainPhoto from '../../assets/mainPhoto.png';

export const Home = () => {
    return (
        <section id={'home'} className={style.sectionBox}>
           <div  className={style.container}>
               <div className={style.homeBox}>
                   <div className={style.info}>
                       <div className={style.typeBox}>
                           <h1>Онлайн-школа английского языка <br/>Open Mind English</h1>
                           <p>Здесь вы получите мощную языковую практику с результатом уже в первый месяц, подготовитесь к любому экзамену, получая удовольствие от каждого урока.</p>
                       </div>
                   </div>
                   <div className={style.photo}>
                       <div className={style.circleBack}/>
                       <img src={mainPhoto} className={style.mainPhoto} alt="#"/>
                       <div className={style.circleFront}/>
                   </div>
               </div>
           </div>
        </section>
    )
}