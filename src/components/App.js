import React, {Component, useState} from "react";
import '../styles/App.css';
import FormValidation from "./FormValidation";
const App = () => {
  return (
    <div id="main" style={{width:"100%"}}>
      <form className="demoForm">
        <div className="formInputs">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" data-testid='name'/>
        </div>
        <div className="formInputs">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" data-testid='email'/>
        </div>
        <div className="formInputs">
          <label htmlFor="gender">Gender: </label>
          <select id="gender" data-testid = 'gender'>
            <option name="gender">Male</option>
            <option name="gender">Female</option>
            <option name="gender">Others</option>
          </select>
        </div>
        <div className="formInputs">
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input type="number" name="phoneNumber" data-testid='phoneNumber'/><br/><br/>
        </div>
        <div className="formInputs">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" data-testid='password' type="password"/><br/><br/>
        </div>
        <button data-testid = 'submit' type="submit">Submit</button>
      </form>
      <FormValidation/>
    </div>
   
   
  )
}


export default App;
