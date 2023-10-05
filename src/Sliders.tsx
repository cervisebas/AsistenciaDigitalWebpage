import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Sliders.scss";

export default React.memo(function Sliders() {
    return(<Swiper id={'HomeSwiper'} enabled={false}>
        <SwiperSlide children={'Page 1'} />
        <SwiperSlide children={'Page 2'} />
        <SwiperSlide children={'Page 3'} />
    </Swiper>);
});