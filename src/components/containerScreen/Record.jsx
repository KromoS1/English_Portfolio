import React, {useRef} from "react";
import style from '../../styles/recordStyles.module.scss';
import {sendForm} from "../../api/emailjsApi";

export const Record = ({title,id}) => {

    const form = useRef();

    const send = (e) => {
        e.preventDefault();
        sendForm(form.current);
    }

    return (
        <section id={id ? id : ''} className={style.sectionBox}>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>{title ? title : 'Записаться к нам на обучение'}</h3>
                </div>
                <div className={style.row}>
                    <div className={style.contactForm}>
                        <form ref={form} onSubmit={send}>
                            <div className={style.rowForm}>
                                <div className={style.inputBox}>
                                    <div className={style.inputControl}>
                                        <input type="text" placeholder={"Ваше ФИО"} name={'name'} />
                                    </div>
                                </div>
                                <div className={style.inputBox}>
                                    <div className={style.inputControl}>
                                        <input type="email" placeholder={'Почта'} name={'email'} />
                                    </div>
                                </div>
                                <div className={style.inputBox}>
                                    <div className={style.inputControl}>
                                        <input type="tel" placeholder={'Номер телефона'} name={'phone'}/>
                                    </div>
                                </div>
                                <div className={style.inputBox}>
                                    <div className={style.btnBar} style={{display:'flex',justifyContent:'center'}}>
                                        <button type={"submit"}>Записаться</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
