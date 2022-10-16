import React from "react";
import style from "../../styles/getToUsStyles.module.scss";

export const QuestionAnswer = ({question, answer}) => {

    const addListener = (btn) => {

        btn.classList.toggle("active");

        let panel = btn.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    return (
        <div className={style.stageBoxQuestion}>
            <div className={style.stageQuestion}>
                <p className={style.accordion} onClick={e => addListener(e.currentTarget)}>{question}</p>
                <div className={style.panel}>
                    <p>
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}