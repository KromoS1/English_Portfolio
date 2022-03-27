import React from "react";
import style from '../../styles/problemStyles.module.scss';

export const Problem = () => {
    return (
        <div className={style.problemContainer}>
            <div className={style.box}>
                <div className={style.problem}>
                    <h4>Как поднять цену на занятия?</h4>
                    <span>После поднятия цен часть клиентов уходит, а новые не приходят. Как выйти на новый уровень заработка?</span>
                </div>
                <div className={style.problem}>
                    <h4>Где искать клиентов?</h4>
                    <span>Нет новых учеников, а старые занимаются не регулярно. Как привлечь учеников к себе на занятия?</span>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.problem}>
                   <h4>Как вести занятия онлайн?</h4>
                   <span>Отказываете потенциальным клиентам, потому что не знаете, как работать с младшими школьниками онлайн.
                       Не повышается заработок, потому что работаете онлайн только индивидуально</span>
               </div>
                <div className={style.problem}>
                   <h4>Как интересно вести уроки?</h4>
                   <span>Все игры и сайты уже приелись, хочется узнать что-то новое</span>
               </div>
            </div>
        </div>
    )
}