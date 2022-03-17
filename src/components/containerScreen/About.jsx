import React from "react";
import style from '../../styles/aboutStyles.module.scss';
import {Separated} from "../common/Separated";
import {BlocWe} from "../common/BlocWe";
import Me from '../../img/MePhoto.jpg';

export const About = () => {

    return (
        <section className={style.sectionBox}>
            <div className={style.container}>
               <div className={style.aboutBox}>
                   <div className={style.photo}>
                        <div className={style.aboutMe}>
                            <div className={style.img}>
                                <div className={style.imgIn}>
                                    <img src={Me} alt="#"/>
                                </div>
                            </div>
                            <div className={style.infoName}>
                                <p>FullStack, Mobile Developer</p>
                                <h3>Шавлинский Роман</h3>
                            </div>
                        </div>
                   </div>
                   <div  className={style.biography}>
                       <div className={style.info}>
                           <div className={style.title}>
                               <h3>Биография</h3>
                           </div>
                           <div className={style.aboutText}>
                                <p>Дорогие друзья, начало повседневной работы по формированию позиции требует определения и уточнения существующих
                                    финансовых и административных условий? Практический опыт показывает, что начало повседневной работы по формированию
                                    позиции требует от нас анализа существующих финансовых и административных условий.
                                    Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
                                    позволяет выполнить важнейшие задания по разработке всесторонне сбалансированных нововведений.</p>
                               <p>Повседневная практика показывает, что постоянное информационно-техническое обеспечение
                                   нашей деятельности обеспечивает актуальность новых предложений. Повседневная практика показывает, что курс на
                                   социально-ориентированный национальный проект требует от нас системного анализа дальнейших направлений развитая системы
                                   массового участия! Равным образом постоянное информационно-техническое обеспечение нашей деятельности обеспечивает актуальность
                                   форм воздействия. Таким образом, постоянное информационно-техническое обеспечение нашей деятельности создаёт предпосылки
                                   качественно новых шагов для направлений прогрессивного развития?</p>
                           </div>
                           <div className={style.infoList}>
                               <div className={style.rowInfoList}>
                                   <div className={style.columnList}>
                                       <ul>
                                           <li><label>ФИО: </label><span>Шавлинский Роман</span></li>
                                           <li><label>День Рождения: </label><span>18.02.1996</span></li>
                                           <li><label>Возраст: </label><span>26</span></li>
                                       </ul>
                                   </div>
                                   <div className={style.columnList}>
                                       <ul>
                                           <li><label>Телефон </label><span>+375-(29)-748-58-75</span></li>
                                           <li><label>Почта: </label><span>krakenHRI@gmail.com</span></li>
                                           <li><label>Организаци: </label><span>BezKassira</span></li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
                <Separated/>
                <div className={style.title}>
                    <h3>Почему мы?</h3>
                </div>
                <div className={style.boxWe}>
                    <BlocWe/>
                    <BlocWe/>
                    <BlocWe/>
                </div>
            </div>
        </section>
    )
}