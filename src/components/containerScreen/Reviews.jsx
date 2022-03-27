import React from "react";
import style from '../../styles/reviewsStyles.module.scss';

export const Reviews = () => {
    return (
        <section className={style.section}>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Отзывы</h3>
                </div>
                <div className={style.wrapper}>
                   <div className={style.slickSlider} dir={'ltr'}>
                       <button type={'button'} className={style.slickArrow}>Previous</button>
                       <div className={style.slickList}>
                           <div className={style.slickTrack}>
                               <div className={style.slickSlide}>
                                   <div>
                                       <div className={style.aosInit}>
                                           <div className={style.testimonial}>
                                               <div className={style.avatar}></div>
                                               <div className={style.mediaBody}>
                                                   <p>  Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry's
                                                       standard dummy text ever since the 1500s.</p>
                                                   <h6>Nancy Byers</h6>
                                                   <span>CEO at ib-themes</span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className={style.slickSlide}>
                                   <div>
                                       <div className={style.aosInit}>
                                           <div className={style.testimonial}>
                                               <div className={style.avatar}></div>
                                               <div className={style.mediaBody}>
                                                   <p>  Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry's
                                                       standard dummy text ever since the 1500s.</p>
                                                   <h6>Nancy Byers</h6>
                                                   <span>CEO at ib-themes</span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className={style.slickSlide}>
                                   <div>
                                        <div className={style.aosInit}>
                                            <div className={style.testimonial}>
                                                <div className={style.avatar}></div>
                                                <div className={style.mediaBody}>
                                                    <p>  Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s.</p>
                                                    <h6>Nancy Byers</h6>
                                                    <span>CEO at ib-themes</span>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                               </div>
                               <div className={style.slickSlide}>
                                   <div>
                                       <div className={style.aosInit}>
                                           <div className={style.testimonial}>
                                               <div className={style.avatar}></div>
                                               <div className={style.mediaBody}>
                                                   <p>  Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry's
                                                       standard dummy text ever since the 1500s.</p>
                                                   <h6>Nancy Byers</h6>
                                                   <span>CEO at ib-themes</span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className={style.slickSlide}>
                                   <div>
                                       <div className={style.aosInit}>
                                           <div className={style.testimonial}>
                                               <div className={style.avatar}></div>
                                               <div className={style.mediaBody}>
                                                   <p>  Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry's
                                                       standard dummy text ever since the 1500s.</p>
                                                   <h6>Nancy Byers</h6>
                                                   <span>CEO at ib-themes</span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className={style.slickSlide}>
                                   <div>
                                       <div className={style.aosInit}>
                                           <div className={style.testimonial}>
                                               <div className={style.avatar}></div>
                                               <div className={style.mediaBody}>
                                                   <p>  Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry's
                                                       standard dummy text ever since the 1500s.</p>
                                                   <h6>Nancy Byers</h6>
                                                   <span>CEO at ib-themes</span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className={style.slickSlide}>
                                   <div>
                                       <div className={style.aosInit}>
                                           <div className={style.testimonial}>
                                               <div className={style.avatar}></div>
                                               <div className={style.mediaBody}>
                                                   <p>  Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry's
                                                       standard dummy text ever since the 1500s.</p>
                                                   <h6>Nancy Byers</h6>
                                                   <span>CEO at ib-themes</span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className={style.slickSlide}>
                                   <div>
                                       <div className={style.aosInit}>
                                           <div className={style.testimonial}>
                                               <div className={style.avatar}></div>
                                               <div className={style.mediaBody}>
                                                   <p>  Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry's
                                                       standard dummy text ever since the 1500s.</p>
                                                   <h6>Nancy Byers</h6>
                                                   <span>CEO at ib-themes</span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <button className={style.slickArrow}>Next</button>
                       <ul className={style.slickDots} style={{display:'block'}}>
                           <li className={style.slickActive}>
                                <button>1</button>
                           </li>
                           <li className={style.slickDotsLi}>
                               <button>2</button>
                           </li>
                       </ul>
                   </div>
                </div>
            </div>
        </section>
    )
}