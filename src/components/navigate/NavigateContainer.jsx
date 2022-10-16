import React, {useCallback, useState} from "react";
import style from '../../styles/navigateContainerStyle.module.scss';
import {IconNav} from "./IconNav";
import {Hamburger} from "../common/Hamburger";

export const NavigateContainer = () => {

    const [isOpenNav,setIsOpenNav] = useState(false);

    const switchHamburger = useCallback(() => {
        setIsOpenNav(!isOpenNav);
    },[isOpenNav]);


    return (
        <>
            <header className={'container'}>
                <div className={style.scroll_bar}>
                    <div className={style.top}>
                        <div className={style.logo_box}>
                            <a className={style.logo} href={'#home'}/>
                        </div>
                    </div>
                    <div className={style.nav_menu}>
                        <IconNav iconName={'home'} size={25} href={'#home'} />
                        <IconNav iconName={'user'} size={25} href={'#user'} />
                        <IconNav iconName={'library'} size={25} href={'#library'} />
                        {/*<IconNav iconName={'users'} size={25} href={'users'} />*/}
                        <IconNav iconName={'pencil'} size={25} href={'#pencil'} />
                    </div>
                </div>
            </header>
            <Hamburger switchHamburger={switchHamburger} isOpenNav={isOpenNav}/>

            <style jsx>{`
                .container{
                    width: 80px;
                    position: fixed;
                    left: 0;
                    top: 0;
                    height: 100vh;
                    background: #fff;
                    border-right: 1px solid rgba(11,11,19,.1);
                }
                @media (max-width: 767px) {
                    .container{
                        transition: all .35s ease;  
                        -webkit-transform: translateX(-100%);  
                        transform: translateX(${isOpenNav ? '0%' : '-100%'});
                        z-index: 222;
                    }
                }
            `}</style>
        </>

)}
