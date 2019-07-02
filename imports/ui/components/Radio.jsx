import React, {Component} from 'react';  

const Radio = (props) => {
    return(
        <div className="form-group">
            <label htmlFor={props.name}> {props.label} </label>
            <div className={props.className} 
              name={props.name} 
              value={props.value} 
              disabled={props.disabled}
              validate={props.validate}
              required={props.required}
              defaultValue={props.value}
              onChange={props.handleChange}
              placeholder={props.placeholder }>
              {props.items.map(item => {
                return (
                  <p><input 
                    key={item["value"]}
                    type={props.type}
                    value={item["value"]}
                    name={item["name"]}
                    /> {item["value"]}
                  </p>
                )
              })}
            </div>  
      </div>
    )
}
 
export default Radio;  


