import React, {Component} from 'react';  
 
import CheckBox from './CheckBox';  
import Input from './Input';  
import TextArea from './TextArea';  
import Radio from './Radio';
import Select from './Select';
import Button from './Button';
import form1 from "../../api/form1.json";

 
class FormContainer extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      newEntry: {},
      errors: {}
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let DataEntry = this.state.newEntry;
    fetch('http://localhost:3000/',{
        method: "POST",
        body: JSON.stringify(DataEntry),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
     
  }
  
  handleValidation(){
    let newEntry = this.state.newEntry;
    let errors = {};
    let formIsValid = true;

    if(!newEntry["Name"]){
       formIsValid = false;
       errors["Name"] = "Cannot be empty";
    }

    if(typeof newEntry["Name"] !== "undefined"){
       if(!newEntry["Name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["Name"] = "Another content";
       }        
    }

    if(!newEntry["About"]){
       formIsValid = false;
       errors["About"] = "Cannot be empty";
    }

   this.setState({errors: errors});
   return formIsValid;
  }

  contactSubmit(e){
      e.preventDefault();

      if(this.handleValidation()){
        alert("Form submitted");
      }else{
        alert("Form has errors.")
      }

  }

  handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
  }



  generate(){
    let massiv = [];
    const FormName = form1["form1"]["name"]
    const data = form1["form1"]["items"];
    for (let i = 0; i < data.length; i++) {
      let attributes = data[i]["attributes"]
      if (data[i]["type"] === "text"){
        massiv.push(
          <Input
            type={data[i]["type"]}  
            name={attributes["name"]}
            placeholder={attributes["placeholder"] }
            required={attributes["required"] }
            validate ={attributes["validate"] }
            label={attributes["label"] }
            className={attributes["className"] }
            handleChange = {()=> this.handleInput(event)}
            disabled ={attributes["disable"]}
          />
        )
      } else if(data[i]["type"] ==="textarea"){  
        massiv.push(
          <TextArea
            type={data[i]["type"]}  
            name={attributes["name"]}
            rows={6}
            placeholder={attributes["placeholder"] }
            required={attributes["required"] }
            validate ={attributes["validate"] }
            label={attributes["label"] }
            className={attributes["className"] }
            handleChange = {()=> this.handleInput(event)}
            disabled ={attributes["disable"]}
          />
        )
      } else if(data[i]["type"]==="select"){
        massiv.push(
          <Select      
            type={data[i]["type"]}  
            name={attributes["name"]}
            placeholder={attributes["placeholder"] }
            required={attributes["required"] }
            validate ={attributes["validate"] }
            value={attributes["value"]}
            label={attributes["label"] }
            className={attributes["className"] }
            disabled ={attributes["disable"]}
            options={attributes["options"]}
            handleChange = {()=>this.handleInput(event)}
          />
        )  
      } else if(data[i]["type"]==="checkbox"){ 
        massiv.push(
          <CheckBox
            type={data[i]["type"]}  
            name={attributes["name"]}
            placeholder={attributes["placeholder"] }
            required={attributes["required"] }
            validate ={attributes["validate"] }
            label={attributes["label"] }
            className={attributes["className"] }
            disabled ={attributes["disable"]}
            checked={attributes["checked"]}
            handleChange = {()=>this.handleCheckBox(event)}
          />
        )
      } else if(data[i]["type"]==="radio"){ 
        massiv.push(
          <Radio
            type={data[i]["type"]}  
            name={attributes["name"]}
            placeholder={attributes["placeholder"] }
            required={attributes["required"] }
            validate ={attributes["validate"] }
            label={attributes["label"] }
            className={attributes["className"] }
            disabled ={attributes["disable"]}
            items={attributes["items"]} 
            handleChange = {()=>this.handleInput(event)}
          />
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
      <form className={FormName} onSubmit={()=>this.handleSubmit(event)}>
        {massiv}
      </form>
    )
  }  


  handleInput(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState( prevState => {
      return { 
        newEntry : {
          ...prevState.newEntry, [name]: value
        }
      }
    }, () => console.log(this.state.newEntry)
    )
  }

  handleCheckBox(event) {
    let checked = event.target.checked;
    let name = event.target.name;
    this.setState( prevState => {
      return { 
        newEntry : {
          ...prevState.newEntry, [name]: checked
        }
      }
    }, () => console.log(this.state.newEntry)
    )
  }

  render() {
    return (
        this.generate()
    );
  }
}
 
export default FormContainer;
