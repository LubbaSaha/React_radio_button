import React from "react";

import "./RadioButton.scss";

const RadioButton = (props) => {

    const { label, name, checked, onClick, groupName, ...rest } = props;

    return (
        <div className="RadioButton">
            <input 
                type="radio" 
                id={name} 
                name={groupName}
                checked={checked} 
                onClick={onClick} 
                onChange={e => {}}
                {...rest}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default RadioButton;