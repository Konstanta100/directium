import React from 'react';

const TextArea = (props) => (  
  <div className="form-group">
    <label className="form-label">{props.label}</label>
    <textarea className={props.className} 
    className="form-control"
    name={props.name}
    rows={props.rows}
    onChange={props.handleChange}
    placeholder={props.placeholder} />
  </div>
);

export default TextArea;