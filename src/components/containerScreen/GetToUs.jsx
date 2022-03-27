import React from "react";
import style from '../../styles/getToUsStyles.module.scss';
import {Separated} from "../common/Separated";

export const GetToUs = () => {
    return (
        <section className={style.section}>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Как к нам попасть?</h3>
                </div>
                <div className={style.rowStage}>
                    <div className={style.stageBox}>
                        <div className={style.stage}>
                            <div className={style.infoStage}>
                                <h6>Изучить основы</h6>
                                <p>Перед записью к нам желательно знать некоторые основы..тра ля ля
                                    Перед записью к нам желательно знать некоторые основы..тра ля ля
                                    Перед записью к нам желательно знать некоторые основы..тра ля ля
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.stageBox}>
                        <div className={style.stage}>
                            <div className={style.infoStage}>
                                <h6>Необходимо записаться</h6>
                                <p>Оставьте заявку у нас на сайте и наши менеджеры с вами свяжуться.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.stageBox}>
                        <div className={style.stage}>
                            <div className={style.infoStage}>
                                <h6>Пройти вступительный экзамен</h6>
                                <p>Пройти экзамен ..тра ля ля</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}