import React, { useState } from "react";
import {
    Title,
    Subtitle,
} from "./InputMenu.styled";
import './style.scss';

function InputItem(props) {
    const [inputValue, setInputValue] = useState(props.defaultValue || '');
    return (
        <div className="style-input">
            <Title>{props.info.content}
                {props.isRequired && <Subtitle>*</Subtitle>}
            </Title>
            <div className="addmenu-wrapper">
                <input onChange={e => setInputValue(e.target.value)} value={inputValue} ref={props.valueRef} placeholder={props.info.holder} className={props.message?.length > 0 ? "setinput addmenu-input-warning-box" : "setinput"} />
                {props.message?.length > 0 && <div className="addmenu-input-icon" />}
                {props.message?.length > 0 && <p className="addmenu-input-showing">{props.message}</p>}
            </div>
        </div>
    );
}

export default React.memo(InputItem);
