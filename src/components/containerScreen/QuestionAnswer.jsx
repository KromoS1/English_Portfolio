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
                <h4 className={style.accordion} onClick={e => addListener(e.currentTarget)}>{question}</h4>
                <div className={style.panel}>
                    <p>
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}