import React from "react";
import style from '../../styles/containerScreen.module.scss';
import {Home} from "./Home";
import {About} from "./About";

export const ContainerScreen = () => {
    return (
        <div className={style.container}>
            <Home/>
            <About/>
        </div>
    )
}