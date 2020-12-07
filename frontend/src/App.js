import React, { useState,useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserComponent from "./components/UsersRegister";

function App() {
  const [formData, setformData] = useState({});
  const [dataForUserComponent,setdataForUserComponent]=useState([]);

  useEffect(()=>{
      axios.get("http://localhost:5000/api/users").then((res)=>{
        setdataForUserComponent(res.data)
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
  },[])

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
      <UserComponent data={dataForUserComponent}/>
    </div>
  );
}

export default App;
