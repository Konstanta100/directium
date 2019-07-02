import React, {Component}  from 'react';


const CheckBox = (props) => {
    return( 
        <div className="form-group">
            <label htmlFor={props.name} >{props.label}</label>
            <p><input
                id = {props.name}
                name={props.name}
                onChange={props.handleChange}
                disabled={props.disabled}
                validate={props.validate}
                required={props.required}
                placeholder={props.placeholder}
                defaultChecked={ props.checked}
                type={props.type} /> 
            </p>  
        </div>
    )    
}

export default CheckBox;


