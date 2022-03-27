import React from "react";
import style from '../../styles/aboutStyles.module.scss';

export const BlocWe = ({title,text}) => {
    return (
        <div className={style.blockWe}>
            <div className={style.block}>
                <div className={style.content}>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
