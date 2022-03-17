import React from "react";
import style from '../../styles/navigateContainerStyle.module.scss';
import {IconNav} from "./IconNav";

export const NavigateContainer = () => {
    return (
        <header className={style.container}>
            <div className={style.scroll_bar}>
               <div className={style.top}>
                   <div className={style.logo_box}>
                       <a className={style.logo} href={'/'}>N</a>
                   </div>
               </div>
               <div className={style.nav_menu}>
                    <IconNav iconName={'home'} size={25} href={'home'}/> {/*главная*/}
                    <IconNav iconName={'user'} size={25} href={'user'}/> {/*про дашу*/}
                    <IconNav iconName={'file'} size={25} href={'file'}/> {/*проблемы и почему мы*/}
                    <IconNav iconName={'library'} size={25} href={'library'}/> {/*как к нам попасть*/}
                    <IconNav iconName={'users'} size={25} href={'users'}/> {/*преподы и отзывы*/}
                    <IconNav iconName={'pencil'} size={25} href={'pencil'}/> {/*записаться*/}
               </div>
            </div>
        </header>
    )
}