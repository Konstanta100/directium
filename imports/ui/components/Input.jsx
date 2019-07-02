import React, {Component} from 'react';  

const Input = (props) => {
    return (  
        <div className="form-group">
            <label htmlFor={props.name} >{props.label}</label>
            <p><input
            className={props.className}
            id={props.name}
            name={props.name}
            type={props.type}
            onChange={props.handleChange}
            placeholder={props.placeholder} 
            disabled={props.disabled}
            validate={props.validate}
            onChange={props.handleChange}
            required={props.required}
            /></p>
        </div>
    )
}
 
export default Input;