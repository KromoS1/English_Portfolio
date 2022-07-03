import React from "react";
import style from '../../styles/reviewsStyles.module.scss';
import {Separated} from "../common/Separated";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import {Teacher} from "../common/Teacher";
import {Review} from "../common/Review";

const teachers = [
    <Teacher/>,
    <Teacher/>,
    <Teacher/>,
];

const reviews = [
    <Review/>,
    <Review/>,
    <Review/>,
]

export const Reviews = () => {

    return (
        <section id={'users'} className={style.section}>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Преподаватели</h3>
                </div>
                <div className={style.teacherContainer}>
                    <AliceCarousel autoPlayStrategy={"all"}
                                   controlsStrategy={'alternate,responsive'}
                                   disableButtonsControls
                                   infinite
                                   touchTracking
                                   animationDuration={1000}
                                   autoPlayInterval={5000}
                                   autoPlay
                                   mouseTracking
                                   items={teachers} />
                </div>
                <Separated/>
                <div className={style.title}>
                    <h3>Отзывы</h3>
                </div>
                <div className={style.reviewContainer}>
                    <AliceCarousel autoPlayStrategy={"all"}
                                   controlsStrategy={'alternate,responsive'}
                                   disableButtonsControls
                                   infinite
                                   touchTracking
                                   animationDuration={1000}
                                   autoPlayInterval={5000}
                                   autoPlay
                                   mouseTracking
                                   items={reviews} />
                </div>
            </div>
        </section>
    )
}
