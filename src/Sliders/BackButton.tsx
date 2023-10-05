import React from "react";
import Button from "../components/Button";
import { MdArrowBack } from "react-icons/md";
import { useSwiper } from "swiper/react";

export default React.memo(function() {
    const swiper = useSwiper();
    const _onPress = ()=>swiper.slideNext();
    return(<Button
        title={'Volver'}
        left={<MdArrowBack />}
        onPress={_onPress}
    />);
});