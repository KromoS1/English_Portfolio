import React from "react";
import style from '../../styles/containerScreen.module.scss';
import {Home} from "./Home";
import {About} from "./About";
import {GetToUs} from "./GetToUs";
import {Record} from "./Record";
import {Footer} from "./Footer";
import {Reviews} from "./Reviews";

export const ContainerScreen = () => {
    return (
        <div className={style.container}>
            <Home/>
            <About/>
            <GetToUs/>
            <Reviews/>
            <Record id={'pencil'}/>
            <Footer/>
        </div>
    )
}
