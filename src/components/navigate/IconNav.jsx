import React from "react";
import style from '../../styles/navigateContainerStyle.module.scss';
import {Icon} from "../../icons/Icon";
import { Link } from "react-scroll";

export const IconNav = ({iconName,size,href}) => {
    return (
        <div className={style.icon_box}>
            <div className={style.icon_link}>
                <Link activeClass={style.active} to={href} spy={true} smooth={true} duration={500}>
                    <Icon icon={iconName} size={size}/>
                </Link>
            </div>
        </div>
    )
}
