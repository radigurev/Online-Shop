import React, { useEffect } from "react";

import "./Button.css";

const Button = (props) => {

    return (
        <button onClick={props.OnClick} className={`custom-btn btn-5 m-1 color-${props.color}`}><span>{props.children}</span></button>
    );
};

export default Button;