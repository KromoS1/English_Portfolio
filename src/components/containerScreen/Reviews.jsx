import React from "react";
import style from '../../styles/reviewsStyles.module.scss';
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import {Review} from "../common/Review";

const reviews = [
    <Review nameComment={'comm1'}/>,
    <Review nameComment={'comm2'}/>,
    <Review nameComment={'comm3'}/>,
    <Review nameComment={'comm4'}/>,
    <Review nameComment={'comm5'}/>,
    <Review nameComment={'comm6'}/>,
    <Review nameComment={'comm7'}/>,
    <Review nameComment={'comm8'}/>,
]

export const Reviews = () => {

    return (
        <section id={'users'} className={style.section}>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Отзывы</h3>
                </div>
                <div className={style.reviewContainer}>
                    <AliceCarousel autoPlayStrategy={"all"}
                                   controlsStrategy={'alternate,responsive'}
                                   disableButtonsControls
                                   animationType={'slide'}
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
