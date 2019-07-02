import React, {Component} from 'react';  

const Select = (props) => {
    return(
        <div className="form-group">
            <label htmlFor={props.name}> {props.label} </label>
            <p>
              <select 
                className={props.className} 
                name={props.name} 
                disabled={props.disabled}
                validate={props.validate}
                required={props.required}
                defaultValue={props.value}
                onChange={props.handleChange}>
                <option value="" disabled>{props.placeholder}</option>
                {props.options.map(option => {
                  return (
                    <option
                      key={option["text"]}
                      value={option["value"]}
                    >{option["text"]}
                    </option>
                  );
                })}
              </select>
            </p>
      </div>)
}
 
export default Select;  
