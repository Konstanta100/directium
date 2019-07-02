import React, { Component } from 'react';
import FormContent from './components/FormContent';

class App extends Component {

  addInfo(event){
    event.preventDefault();
  }
  
  generate(){
    let massiv = [];
    const form = form1["form1"]["name"]
    const data = form1["form1"]["items"];
    for (let i = 0; i < data.length; i++) {
      let attributes = data[i]["attributes"]

      if (data[i]["type"] === "text" || data[i]["type"] ==="textarea"){
        massiv.push(
          <p><input 
            key ={i}
            type={data[i]["type"]}  
            name={attributes["name"]}
            placeholder={attributes["placeholder"] }
            required={attributes["required"] }
            validate ={attributes["validate"] }
            value={attributes["value"] }
            label={attributes["label"] }
            className={attributes["className"] }
            disabled ={attributes["disable"]}
          /></p>
        )  
      } else if(data[i]["type"]==="filler"){
        massiv.push(
          <p><input
            key ={i}
            type={data[i]["type"]}
            message={attributes["message"]}
          /></p>
        ) 
      } else if(data[i]["type"]==="select"){
        let ArrayOptions = [];
        let options=attributes["options"]; 
        for( let j=0; j < options.length; j++){
          ArrayOptions.push(
            <option 
              selected={options[j]["selected"] === "true" ? selected : null }
              value ={options[j]["value"] } >{options[j]["text"] }
            </option> 
          )
        }
        massiv.push(
          <p><select         
            key ={i}
            type={data[i]["type"]}  
            name={attributes["name"]}
            placeholder={attributes["placeholder"] }
            required={attributes["required"] }
            validate ={attributes["validate"] }
            value={attributes["value"] }
            label={attributes["label"] }
            className={attributes["className"] }
            disabled ={attributes["disable"]}>
            {ArrayOptions}
          </select></p>
        )  
      } else if(data[i]["type"]==="checkbox"){ 
        massiv.push(
          <p><input 
            key ={i}
            type={data[i]["type"]}  
            name={attributes["name"]}
            placeholder={attributes["placeholder"] }
            required={attributes["required"] }
            validate ={attributes["validate"] }
            label={attributes["label"] }
            className={attributes["className"] }
            disabled ={attributes["disable"]}
            checked={attributes["checked"]}
          /></p>
        )
      } else if(data[i]["type"]==="radio"){ 
        let ArrayItems = [];
        let items=attributes["items"]; 
        for( let j=0; j < items.length; j++){
          ArrayItems.push(
            <input
              key ={i}
              type={data[i]["type"]}  
              name={attributes["name"]}
              placeholder={attributes["placeholder"] }
              required={attributes["required"] }
              validate ={attributes["validate"] }
              label={attributes["label"] }
              className={attributes["className"] }
              disabled ={attributes["disable"]}
              checked={items[j]["checked"]}
              value ={items[j]["value"] } 
            />
          )
        }
        massiv.push(
          <p>{ArrayItems}</p>
        )  
      } else if(data[i]["type"]==="button"){ 
        massiv.push(
          <p><input key ={i} type="button" className={attributes["className"]} value={attributes["value"]}/></p>
        )
      } else {
        continue;
      }
    }
    return (
      <form name={form} onSubmit={()=>this.addInfo(event)}>
        {massiv}
      </form>
    )
  }  

  render() {
    return (
      <div className="App">
        <h1>Test Directium</h1>
        <FormContent/>
      </div>
    );
  }
}

export default App;