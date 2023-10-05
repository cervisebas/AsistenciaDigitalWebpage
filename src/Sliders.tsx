import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Sliders.scss";
import Introduction from "./Sliders/Pages/Introduction";

export default React.memo(function Sliders() {
    return(<Swiper id={'HomeSwiper'} enabled={true} simulateTouch={false} noSwiping={true} noSwipingClass={'swiper-slide'}>
        <SwiperSlide children={<Introduction />} />
        <SwiperSlide children={'Page 2'} />
    </Swiper>);
});