import React from "react";

const FileInput = props => (
  <div style={{position:"relative"}}>
  <input
    // style={{background: 'blue'}}
    className=""
    type="file"
    accept="image/*"
    name="img-loader-input"
    
    {...props}
  />
  <button className="Choose-Files-Button">Choose File</button>
  </div>
);

export default FileInput;
