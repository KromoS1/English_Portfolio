import React from "react";
import {Icon} from "../../icons/Icon";
import style from '../../styles/getToUsStyles.module.scss';


export const GetToUsBlock = ({iconName,text}) => {
    return (
        <div className={style.stageBox}>
            <div className={style.stage}>
                <div className={style.infoStage}>
                    <div className={style.icon}>
                        <Icon icon={iconName} size={45}/>
                    </div>
                    <div className={style.mediaBody}>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}