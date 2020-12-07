import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setformData] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/users",formData).then((res)=>{
          console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  };

  const inputHandler = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="registrationform">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" onChange={inputHandler} />
        <label htmlFor="password">password</label>
        <input name="password" id="password" onChange={inputHandler} />
        <label htmlFor="email">email</label>
        <input name="email" id="email" onChange={inputHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
