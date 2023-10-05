import React from "react";
import Button from "../components/Button";
import { MdArrowForward } from "react-icons/md";
import { useSwiper } from "swiper/react";

export default React.memo(function() {
    const swiper = useSwiper();
    const _onPress = ()=>swiper.slideNext();
    return(<Button
        title={'Siguiente'}
        right={<MdArrowForward />}
        onPress={_onPress}
    />);
});