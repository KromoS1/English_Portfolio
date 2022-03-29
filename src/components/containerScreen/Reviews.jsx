import React from "react";
import style from '../../styles/reviewsStyles.module.scss';
import {Separated} from "../common/Separated";

export const Reviews = () => {
    return (
        <section id={'users'} className={style.section}>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Преподователи</h3>
                </div>
                <div className={style.teacherContainer}>
                    <div className={style.teacherRow}>
                        <div className={style.box}>
                            <div className={style.avatarBox}>
                                <div className={style.avatarTeacher}>
                                    <img src="	https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" alt="#"/>
                                </div>
                            </div>
                            <div className={style.media}>
                                <div className={style.infoTeacher}>
                                    <h6>Дарья</h6>
                                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.teacherRow} style={{marginTop:'30px'}}>
                        <div className={style.box}>
                            <div className={style.avatarBox}>
                                <div className={style.avatarTeacher}>
                                    <img src="	https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" alt="#"/>
                                </div>
                            </div>
                            <div className={style.media}>
                                <div className={style.infoTeacher}>
                                    <h6>Дарья</h6>
                                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.teacherRow} style={{marginTop:'30px'}}>
                        <div className={style.box}>
                            <div className={style.avatarBox}>
                                <div className={style.avatarTeacher}>
                                    <img src="	https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" alt="#"/>
                                </div>
                            </div>
                            <div className={style.media}>
                                <div className={style.infoTeacher}>
                                    <h6>Дарья</h6>
                                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Separated/>
                <div className={style.title}>
                    <h3>Отзывы</h3>
                </div>
                <div className={style.reviewContainer}>
                    <div className={style.reviewBox}>
                        <div style={{margin:'0 10px'}}>
                            <div className={style.box}>
                                <div className={style.avatar}>
                                    <img src="	https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" alt="#"/>
                                </div>
                                <div className={style.mediaBody}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s.</p>
                                    <h6>Анастасия</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.reviewBox}>
                        <div style={{margin:'0 10px'}}>
                            <div className={style.box}>
                                <div className={style.avatar}>
                                    <img src="	https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" alt="#"/>
                                </div>
                                <div className={style.mediaBody}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s.</p>
                                    <h6>Анастасия</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.reviewBox}>
                        <div style={{margin:'0 10px'}}>
                            <div className={style.box}>
                                <div className={style.avatar}>
                                    <img src="	https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" alt="#"/>
                                </div>
                                <div className={style.mediaBody}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s.</p>
                                    <h6>Анастасия</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.reviewBox}>
                        <div style={{margin:'0 10px'}}>
                            <div className={style.box}>
                                <div className={style.avatar}>
                                    <img src="	https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" alt="#"/>
                                </div>
                                <div className={style.mediaBody}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s.</p>
                                    <h6>Анастасия</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}