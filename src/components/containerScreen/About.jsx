import React from "react";
import style from '../../styles/aboutStyles.module.scss';
import {Separated} from "../common/Separated";
import {BlocWe} from "../common/BlocWe";
import Me from '../../img/MePhoto.jpg';
import {Problem} from "../common/Problem";
import Slide from 'react-reveal/Slide';

export const About = () => {

    return (
        <section id={'user'} className={style.sectionBox}>
            <div className={style.container}>
               <div className={style.aboutBox}>
                  <Slide bottom>
                      <div className={style.photo}>
                          <div className={style.aboutMe}>
                              <div className={style.img}>
                                  <div className={style.imgIn}>
                                      <img src={Me} alt="#"/>
                                  </div>
                              </div>
                              <div className={style.infoName}>
                                  <p>FullStack, Mobile Developer</p>
                                  <h3>Дарья Раковская</h3>
                              </div>
                          </div>
                      </div>
                  </Slide>
                  <Slide bottom>
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
                  </Slide>
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
                <Slide bottom >
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
                </Slide>
            </div>
        </section>
    )
}