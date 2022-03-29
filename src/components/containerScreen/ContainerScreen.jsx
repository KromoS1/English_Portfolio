import React, {useState} from "react";
import style from '../../styles/containerScreen.module.scss';
import {Home} from "./Home";
import {About} from "./About";
import {GetToUs} from "./GetToUs";
import {Reviews} from "./Reviews";
import {Record} from "./Record";
import {Footer} from "./Footer";

export const ContainerScreen = () => {
    return (
        <div className={style.container}>
            <Home/>
            <About/>
            <GetToUs/>
            <Reviews/>
            <Record/>
            <Footer/>
        </div>
    )
}