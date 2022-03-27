import React, {useState} from "react";
import style from '../../styles/recordStyles.module.scss';
import {sendForm} from "../../api/emailjsApi";

export const Record = () => {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();

    const changeName = (e) => {
        setName(e.currentTarget.value);
    }
    const changeEmail = (e) => {
        setEmail(e.currentTarget.value);
    }
    const changePhone = (e) => {
        setPhone(e.currentTarget.value);
    }

    const send = async () => {
        sendForm({name,email,phone}).then();
    }

    return (
        <section className={style.sectionBox}>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Записаться</h3>
                </div>
                <div className={style.row}>
                    <div className={style.contactForm}>
                        <h4>Заполните форму что бы записаться</h4>
                        <form>
                            <div className={style.rowForm}>
                                <div className={style.inputBox}>
                                    <div className={style.inputControl}>
                                        <input type="text" placeholder={"Ваше ФИО"} name={'fullName'} onChange={changeName}/>
                                    </div>
                                </div>
                                <div className={style.inputBox}>
                                    <div className={style.inputControl}>
                                        <input type="email" placeholder={'Почта'} name={'email'} onChange={changeEmail}/>
                                    </div>
                                </div>
                                <div className={style.inputBox}>
                                    <div className={style.inputControl}>
                                        <input type="tel" placeholder={'Номер телефона'} value={phone} onChange={changePhone}/>
                                    </div>
                                </div>
                                <div className={style.inputBox}>
                                    <div className={style.btnBar}>
                                        <button onClick={send}>Записаться</button>
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