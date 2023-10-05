import React from "react";
import "./Slide.scss";
import NextButton from "../NextButton";

export default React.memo(function() {
    return(<div className={'slide-content'}>
        <h1>Introducción</h1>
        <NextButton />
    </div>);
});