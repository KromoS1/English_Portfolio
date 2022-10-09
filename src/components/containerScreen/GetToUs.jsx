import React from "react";
import style from '../../styles/getToUsStyles.module.scss';
import {GetToUsBlock} from "../common/GetToUsBlock";
import {QuestionAnswer} from "./QuestionAnswer";

export const GetToUs = () => {
    return (
        <>
            <section id={'library'} className={style.section}>
                <div className={style.container}>
                    <div className={style.title}>
                        <h3>Вопросы и ответы</h3>
                    </div>
                    <div className={style.rowStage}>
                        <QuestionAnswer question={'Если я не могу присутствовать на уроке,снимается ли оплата?'}
                                        answer={'При работе индивидуально, если вы предупредили об отмене урока преподавателя не менее,' +
                                        '                                чем за 4 часа до его начала, оплата не снимается.' +
                                        '                                Если предупреждения не поступило, и преподаватель вышел на урок, то урок считается' +
                                        '                                проведенным, и за него снимается оплата.\n' +
                                        '                                При работе в мини-группе работает политика невозвратов.\n' +
                                        '                                Пропуски занятий - это ответственность студента, поэтому при отсутствии на занятии' +
                                        '                                студента, денежные средства не возвращаются, а занятие не переносится ( но студенту' +
                                        '                                предоставляется занятие в записи, которое ему необходимо изучить самостоятельно).'}
                        />
                        <QuestionAnswer question={'Как производиться оплата?'}
                                        answer={'Оплата за обучение производиться за месяц или за две недели, как удобно Вам, перед началом занятий.'}
                        />
                        <QuestionAnswer question={'Есть ли у вас скидки на онлайн-обучение?'}
                                        answer={'Да. Радуем своих студентов дополнительными бонусами.\n' +
                                        'Для новых студентов в мини-группу действует скидка 30 % на первый месяц обучения.'}
                        />
                        <QuestionAnswer question={'Сколько длиться курс?'}
                                        answer={'Для освоения одного уровня требуется в среднем от 7 до 12 месяцев.'+
                                            'Длительность зависит от количества занятий в месяц и вашего текущего уровня языка.'}
                        />
                        <QuestionAnswer question={'Когда можно начать?'}
                                        answer={'Начать можно в любой момент. Напишите в Директ или отправьте заявку используя форму для записи '+
                                        'и мы расскажем Вам о наличии свободных мест.'}
                        />
                        <QuestionAnswer question={'Есть ли пробное занятие?'}
                                        answer={'Да. На пробном занятии мы определим Ваш уровень языка,цели обучения и тип восприятия,в также вы познакомитесь с преподавателем.'}
                        />
                    </div>
                </div>
            </section>
            <section className={style.section}>
                <div className={style.container}>
                    <div className={style.title}>
                        <h3>Как к нам попасть?</h3>
                    </div>
                    <div className={style.rowStage}>
                        <GetToUsBlock iconName={'profile'} text={'1. Записаться на пробный урок'}/>
                        <GetToUsBlock iconName={'speak'}
                                      text={'2. Знакомство с преподователем, определение уровня и выбор курса'}/>
                        <GetToUsBlock iconName={'money-check'} text={'3. Заключение договора, оплата'}/>
                        <GetToUsBlock iconName={'teacher'} text={'4. Занятие с любимым преподователем'}/>
                        <GetToUsBlock iconName={'graduate'} text={'5. Окончание уровня и получение сертификата'}/>
                    </div>
                </div>
            </section>
        </>
    )
}