import React from "react";
import style from '../../styles/aboutStyles.module.scss';
import {Separated} from "../common/Separated";
import {BlocWe} from "../common/BlocWe";
import {Problem} from "../common/Problem";
import {Record} from "./Record";

export const About = () => {

    return (
        <section id={'user'} className={style.sectionBox}>
            <div className={style.container}>
                <div className={style.aboutBox}>
                    <div className={style.photo}>
                        <div className={style.aboutMe}>
                            <div className={style.img}>
                                <div className={style.imgIn}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.biography}>
                        <div className={style.info}>
                            <div className={style.infoName}>
                                <h3>Дарья Раковская</h3>
                                <p>Основатель, Преподователь</p>
                            </div>
                            <div className={style.aboutText}>
                                <p><b>Всем пламенный Хэллоу!</b>
                                    <br/>Меня зовут Раковская Дарья. Я основатель школы <b>Open Mind English</b> <br/>
                                    За это время, получив огромный опыт работы как с детьми,так и со взрослыми, с людьми
                                    разных профессий и интересов,я смогла усовершенствовать методику работы, включила в
                                    обучения различные спецэффекты, чтобы Вы получали удовольствия от процесса работы. Я
                                    с уверенностью могу сказать,что наша школа объединяет в себе богатый
                                    преподавательский опыт и понимание процессов работы в Интернет среде. Мы очень
                                    трепетно подходим к процессу преподавания и уверены в знаниях,которые получают наши
                                    студенты. Учиться с нами - значит инвестировать в себя и своё будущее! You’re welcome! <br/>
                                    <b>You’re welcome!</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Separated/>
                <div className={style.title}>
                    <h3>Сталкивались с этими проблемами?</h3>
                </div>
                <div className={style.problemBox}>
                    <Problem/>
                </div>
                <Separated/>
                <div className={style.title}>
                    <h3>Почему мы?</h3>
                </div>
                <div className={style.blockWeBox}>
                    <BlocWe title={'Современная методика'}
                            text={'Уроки построены на коммуникативном подходе с применением современных методик. Наши преподаватели много вкладывают в своё обучение , чтобы наши занятия были качественными и вовлекающими.'}/>
                    <BlocWe title={'Результат'}
                            text={'Под четким  сопровождением преподавателя,который вкладывает свои силы в ваше обучение,регулярном  посещении занятий и выполнении домашки результат виден уже в первый месяц работы.'}/>
                    <BlocWe title={'Занятия из любой точки мира'}
                            text={'Онлайн- занятия по Skype/zoom позволяют Вам экономить время на дорогу, не откладывать уроки,даже если Вы в командировке,путешествии или переехали в другой город или страну.'}/>
                    <BlocWe title={'Несколько форматов обучения'}
                            text={'В мини-группах или индивидуально - зависит от вас и вашей цели.'}/>
                    <BlocWe title={'Решаем ваши задачи'}
                            text={'Каждый студент приходит со своим запросом. Мы используем индивидуальный подход,учитываем желания студента , стараемся  сделать уроки не только полезными и результативными,но и насыщенными и интересными.В результате студенты разговаривают 70% урока, преодолевают языковой барьер и достигают своих целей.'}/>
                    <BlocWe title={'Удобные варианты оплаты'}
                            text={'Вы можете произвести оплату дистанционно на карт-счёт за месяц. Возможно оформить беспроцентную рассрочку школы, разбив сумму на несколько платежей.'}/>
                </div>
                <Separated/>
                <Record title={'Заполните форму ,что попасть на бесплатное пробное занятие '}/>
            </div>
        </section>
    )
}