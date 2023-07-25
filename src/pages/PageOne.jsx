import React from 'react'
import Avatar1 from "../assets/avatar-1.jpg"
import Avatar2 from "../assets/avatar-2.jpg"
import Avatar3 from "../assets/avatar-3.jpg"
import Avatar5 from "../assets/avatar-5.png"
import Avatar6 from "../assets/avatar-6.jpg"
import Icon from "../assets/Icon.svg"
import SlickSlider from '../components/SlickSlider'

function PageOne() {
    return (
        <section>
            <section className="container1">
                <div className="area">
                    <div className="box1">
                        <div className='box1_area1'>
                            <img src={Icon} alt='icon' />
                        </div>
                        <div className='box1_area2'>
                            <div>
                                <p className='box1_area2_p1'>25K</p></div>
                            <div>
                                <p className='box1_area2_p2'>Followers</p>
                            </div>
                        </div>
                    </div>
                    <div className="box2">
                        <div>
                            <img src={Avatar1} alt='Avatar-1' />
                        </div>
                        <div className="name_area">
                            <p>I’M Jenny Shakes</p>
                        </div>
                        <div className="message_area">
                            <p>Message</p>
                        </div>
                        <div className="follow_area">
                            <p>FOLLOW</p>
                        </div>
                    </div>
                    <div className="box3"></div>
                </div>
                {/*----------- Mobile View ------------- */}
                <div className='area1' >
                    <div className='area1_box1' >
                        <div className='ab1_area1'>
                            <img src={Icon} alt='icon' />
                        </div>
                        <div className='ab1_area2'>
                            <div>
                                <p className='ab1_area2_p1'>25K</p></div>
                            <div>
                                <p className='ab1_area2_p2'>Followers</p>
                            </div>
                        </div>
                    </div>
                    <div className='area1_box2' ><img src={Avatar5} /></div>
                    <div className='area1_box3' >
                        <div className="area1_box3_message_area">
                            <p>Message</p>
                        </div>
                        <div className="area1_box3_name_area">
                            <p>I’M Jenny Shakes</p>
                        </div>
                        <div className="area1_box3_follow_area">
                            <p>FOLLOW</p>
                        </div>
                    </div>
                </div>


            </section>


            <section className='container2'>
                <div className='container2_area'>
                    <div className='container2_area_box1'>
                        <div>
                            <img src={Avatar2} alt='avatar2' />
                        </div>
                        <div className='avatar2_border'>
                            <div className='avatar2_square'></div>
                        </div>

                    </div>
                    <div className='container2_area_box2'>
                        <div className='container2_area_box2_area'>
                            <div className='container2_area_box2_area_box_1'>
                                <p>My Intro</p>
                            </div>
                            <div className='container2_area_box2_area_box_2'>
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum amet purus quam faucibus faucibus magna. Nisl elit tellus volutpat porta sed tortor enim interdum vestibulum. </p>
                            </div>
                            <div className='container2_area_box2_area_box_3'>
                                <div>
                                    <p>ABOUT ME</p>
                                </div>
                                <div>
                                    <p>HIRE ME</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container3'>
                <div className="container3_area">
                    <img src={Avatar3} alt='image3'></img>
                    <div className='container3_border' ></div>
                </div>
            </section>

            <section className='container31'>
                <div className="container31_area">
                    <img src={Avatar6} alt='image3'></img>
                    <div className='pradeep'>
                    <div className='container31_border' ></div>
                    </div>
                </div>
            </section>

            <section className='4' >
                <div className='container4_area' >
                    <div className='galary'><p>My Gallery</p></div>
                    <div className='viewall' ><p>View All</p></div>
                </div>
            </section>

            <section className='container5' >
                <SlickSlider />
            </section>

            <section className='container6' >
                <div className='container6_text_area' >
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc auctor arcu purus urna. Viverra sem netus neque convallis commodo. Sit vitae bibendum rhoncus viverra.</p>
                </div>
            </section>

            <section className='container7' >
                <div className='container7_text_area' >
                    <p>Thank you ! Visit Again</p>
                </div>
            </section>


        </section>
    )
}

export default PageOne