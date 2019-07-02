import React, { Component } from 'react';
import {withTracker} from  'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
// import { Towns } from '../api/towns.js';
import ReactDOM from 'react-dom';
import form1 from "./form1.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sort: false
    };
  }    

    
  addTown(event) {
    event.preventDefault();
    const town = ReactDOM.findDOMNode(this.refs.town).value.trim();
    if (town !== ''){
        Meteor.call('InsertNewTown', town, (err, res)=>{
            if(!err){
                ReactDOM.findDOMNode(this.refs.town).value="";
            }
        });
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="InputTown">
          <form className="form-inline text-center first-child" onSubmit={()=>this.addTown(event)}
          role="form" id="searchform">
            <div className="form-group">
              <input
                className="form-control border-color col-sm-12"
                type="text"
                ref="town"
                placeholder ="Название города" />
            </div>    
            <button type="submit" className="btn btn-danger">Добавить</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
//   Meteor.subscribe('towns');
  return { 
    // asctowns: Towns.find({}).fetch(),
    // desctowns: Towns.find({},{sort:['town', 'desc']}).fetch(),
  };
})(App);