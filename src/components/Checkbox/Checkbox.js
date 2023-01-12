import React from "react";
import PropTypes from "prop-types";

import "./Checkbox.scss";

const Checkbox = (props) => {

    const { label, name, checked, onClick, disabled, groupName } = props;

    return (
        <div className="Checkbox">
            <input
                type="checkbox"
                id={name}
                name={groupName}
                checked={checked}
                onClick={onClick}
                onChange={e => { }}
                disabled={disabled}
            />
            <label 
                htmlFor={name}
            >
                <span></span>
                {label}
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    groupName: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

export default Checkbox;