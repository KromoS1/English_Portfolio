import React from "react";
import style from "../../styles/reviewsStyles.module.scss";

const handleDragStart = (e) => e.preventDefault();


export const Review = ({nameComment}) => {
    const img = require(`../../img/comments/${nameComment}.jpg`);
    return(
        <div className={style.reviewBox} onDragStart={handleDragStart} role="presentation">
            <div className={style.box}>
                <div className={style.avatar}>
                    <img src={img} alt="#"/>
                </div>
            </div>
        </div>
    )
}
