import React from "react";
import style from '../../styles/getToUsStyles.module.scss';
import {GetToUsBlock} from "../common/GetToUsBlock";

export const GetToUs = () => {
    /*TODO лучше в столбик, поискать пример в бутстрапе */
    return (
        <section id={'library'} className={style.section}>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Как к нам попасть?</h3>
                </div>
                <div className={style.rowStage}>
                    <GetToUsBlock iconName={'profile'} text={'1. Записаться на пробный урок'}/>
                    <GetToUsBlock iconName={'speak'} text={'2. Знакомство с преподователем, определение уровня и выбор курса'}/>
                    <GetToUsBlock iconName={'money-check'} text={'3. Заключение договора, оплата'}/>
                    <GetToUsBlock iconName={'teacher'} text={'4. Занятие с любимым преподователем'}/>
                    <GetToUsBlock iconName={'graduate'} text={'5. Окончание уровня и получение сертификата'}/>
                </div>
            </div>
        </section>
    )
}