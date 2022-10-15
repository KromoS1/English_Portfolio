import React from "react";
import style from '../../styles/navigateContainerStyle.module.scss';
import {Icon} from "../../icons/Icon";

export const IconNav = ({iconName, size, href}) => {
    return (
        <div className={style.icon_box}>
            <a href={href}>
                <div className={style.icon_link}>
                    <Icon icon={iconName} size={size}/>
                </div>
            </a>
        </div>
    )
}
