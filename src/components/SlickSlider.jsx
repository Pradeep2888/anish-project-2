import React from 'react'
import noprofile from "../assets/avatar-4.png"
import notification from "../assets/notification.svg"
import heart from "../assets/heart.svg"
import chat from "../assets/message.svg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"


function SlickSlider() {

  // const noprofile = "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"

  const responsive = {
    desktop: {
      breakpoint: { max: 5840, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 431 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 430, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel minimumTouchDrag={80}
      swipeable={true}
      draggable={true}

      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}

      autoPlaySpeed={4000}
      autoPlay={true}
      keyBoardControl={true}
      arrows={false}
      transitionDuration={500}
      containerClass="custom-carousel"
      showDots={false}
    >

      <div className="slider-component">
        <img width="100%" src={noprofile}  alt="loading.."></img>
        <div className="slider-bottom">
          <div className="slider-flex">
            <div className="flex-1">
              <p className="slider-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>
            <div className="flex-2">
              <div>
                <div className='icon_area'><img style={{ position: "relative", top: "8px" }} className='icon' src={heart}></img><span>30</span></div>
                <div className='icon_area'><img style={{ position: "relative", top: "8px" }} className='icon' src={notification}></img><span>30</span></div>
                <div className='icon_area'><img style={{ position: "relative", top: "8px" }} className='icon messaage' src={chat}></img></div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <div className="slider-component">
        <div className="image_slider_area">
          <img width="100%"  src={noprofile} alt="loading.."></img>
        </div>
        <div className="slider-bottom">
          <div className="slider-flex">
            <div className="flex-1">
              <p className="slider-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>
            <div className="flex-2">
            <div >
                <div className='icon_area'><img style={{ position: "relative", top: "8px" }} className='icon' src={heart}></img><span>30</span></div>
                <div className='icon_area'><img style={{ position: "relative", top: "8px" }} className='icon' src={notification}></img><span>30</span></div>
                <div className='icon_area'><img style={{ position: "relative", top: "8px" }} className='icon messaage' src={chat}></img></div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <div className="slider-component">
        <img width="100%" src={noprofile}  alt="loading.."></img>
        <div className="slider-bottom">
          <div className="slider-flex">
            <div className="flex-1">
              <p className="slider-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>
            <div className="flex-2">
            <div >
                <div className='icon_area'><img style={{ position: "relative", top: "8px" }} className='icon' src={heart}></img><span>30</span></div>
                <div className='icon_area'><img style={{ position: "relative", top: "8px" }} className='icon' src={notification}></img><span>30</span></div>
                <div className='icon_area'><img style={{ position: "relative", top: "8px" }} className='icon messaage' src={chat}></img></div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>

    </Carousel>
  )
}

export default SlickSlider