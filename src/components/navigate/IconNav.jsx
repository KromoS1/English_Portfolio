import React from "react";
import style from '../../styles/navigateContainerStyle.module.scss';
import {Icon} from "../../icons/Icon";
import {Link} from "react-scroll";

export const IconNav = ({iconName, size, href}) => {
    return (
        <div className={style.icon_box}>
            <Link activeClass={style.active} to={href} spy={true} smooth={true} duration={500}>
                <div className={style.icon_link}>
                    <Icon icon={iconName} size={size}/>
                </div>
            </Link>
        </div>
    )
}
