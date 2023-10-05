import React from "react";
import "./Button.scss";

type IProps = {
    title: string;
    className?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
    style?: React.CSSProperties;
    onPress?: ()=>void;
};

export default React.memo(function Button(props: IProps) {
    const contentStyles: React.CSSProperties = {
        paddingLeft: (props.left)? 'unset': '12px',
        paddingRight: (props.right)? 'unset': '12px',
        ...props.style??{}
    };
    const _onPress = ()=>props.onPress?.();

    return(<div className={`CustomButton ${props.className}`} style={contentStyles} onClick={_onPress}>
        {(props.left)&&<div className={'ButtonLeft'}>
            {props.left}
        </div>}
        <div className={'ButtonContent'}>
            <span>{props.title}</span>
        </div>
        {(props.right)&&<div className={'ButtonRight'}>
            {props.right}
        </div>}
    </div>);
});