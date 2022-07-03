import React from "react";
import style from "../../styles/reviewsStyles.module.scss";

const handleDragStart = (e) => e.preventDefault();


export const Review = () => {
    return(
        <div className={style.reviewBox} onDragStart={handleDragStart} role="presentation">
            <div className={style.box}>
                <div className={style.avatar}>
                    <img src="	https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" alt="#"/>
                </div>
                <div className={style.mediaBody}>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.</p>
                    <h6>Анастасия</h6>
                </div>
            </div>
        </div>
    )
}
