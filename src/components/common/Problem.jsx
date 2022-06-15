import React from "react";
import style from '../../styles/problemStyles.module.scss';

export const Problem = () => {
    return (
        <div className={style.problemContainer}>
            <div className={style.box}>
                <div className={style.problem}>
                    <h4>Не могу говорить на английском</h4>
                    <span>Несмотря на то, что многие люди годами учат английский, они не могут говорить на нем. Это происходит потому, что большую часть времени обучения человек тратит на изучение теории, а вот практику почти ничего не остается .У нас на занятия 80% практики и только 20% теории. Как только вы выучили что-то новое  ,Вы сразу это  применяете в речи.</span>
                </div>
                <div className={style.problem}>
                    <h4>Не запоминаются слова</h4>
                    <span>Вам знакома ситуация, когда вы не можете вспомнить нужное слово, хотя вы точно знаете, что учили его? Все потому что учить слова нужно правильно. На занятия мы используем различные техники для эффективного запоминания слов и легкого воспроизведения их в ситуации.</span>
                </div>
                <div className={style.problem}>
                   <h4>Не понимаю английскую речь на слух</h4>
                   <span>Бывает так,что на занятии Вы все слышите,но как только начинаете смотреть сериал в оригинале ничего не понятно?
                   <br/>
                       Распознавание английской речи на слух – это навык, над которым необходимо работать. Для того чтобы развить его, вам нужно слушать как можно больше английской речи. Но делать это надо правильно. Как это делать, научимся на уроках.
                   </span>
               </div>
                <div className={style.problem}>
                   <h4>В голове каша из английских времён </h4>
                   <span>Английские времена всегда вызывают трудности, потому что они отличаются от времен в русском языке. Часто люди вообще не понимают, в чем отличие каждой группы времен и когда какое время следует использовать. В итоге человек наизусть учит правила, а вот как их использовать, он не понимает. В голове у него "образуется" каша. Научимся правильно запоминать и использовать времена без путаницы.</span>
               </div>
            </div>
        </div>
    )
}