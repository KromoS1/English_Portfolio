import React from "react";
import style from '../../styles/hamburgerStyles.module.scss';

export const Hamburger = ({switchHamburger,isOpenNav}) => {
    return (
        <>
            <div className={style.mobHeader}>
                <button className={style.togglerMenu} onClick={switchHamburger}>
                    <span className={'line one'}/>
                    <span className={'line two'}/>
                    <span className={'line three'}/>
                </button>
            </div>
            <style>{`
                .line{
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  width: 25px;
                  height: 2px;
                  margin: auto;
                  background: #fff;
                  color: #fff;
                  transition: .3s;
                }
                
                .one{
                    top: ${isOpenNav ? '0' : '-17px'};
                    transform: rotate(${isOpenNav ? '45deg': '0'});
                }
                
                .two{
                     top: ${isOpenNav ? '0' : '2px'};
                     left: ${isOpenNav ? '50%' : '0'};
                     width: ${isOpenNav ? '0' : '25px'};
                }
                
                .three{
                     bottom: ${isOpenNav ? '0' : '-19px'};
                     transform: rotate(${isOpenNav ? '-45deg': '0'});
                }
            `}</style>
        </>
    )
}