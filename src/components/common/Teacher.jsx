import React from "react";
import style from "../../styles/reviewsStyles.module.scss";

const handleDragStart = (e) => e.preventDefault();


export const Teacher = () => {
    return (
        <div className={style.teacherRow} onDragStart={handleDragStart} role="presentation">
            <div className={style.box}>
                <div className={style.avatarBox}>
                    <div className={style.avatarTeacher}>
                        <img src="	https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" alt="#"/>
                    </div>
                </div>
                <div className={style.media}>
                    <div className={style.infoTeacher}>
                        <h6>Дарья</h6>
                        <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
