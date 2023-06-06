import React, { useState } from 'react'
import '../functional-component/testf.css'
import Axios from 'axios'

const BasicForm = () => {
  const [loginData, setloginData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: ""
  })

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value; 
    console.log(name, value)
    setloginData((prev) => {
      return {
        ...prev, [name]: value
      }
    })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:8080/api/v1/auth/register", {
      firstname: loginData.firstname,
      lastname: loginData.lastname,
      password: loginData.password,
      email: loginData.email
    })
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })
    console.log(loginData)
  }

  return (
    <div className='student'>

      <h1>Log In From</h1>
      <br />
      <form action="" className='student' onSubmit={handleLogin}>
        <label htmlFor="">First Name</label>
        <input type="text" onChange={handleChange} placeholder='Ankit' name='firstname' value={loginData.firstname} />

        <label htmlFor="">Last Name</label>
        <input type="text" onChange={handleChange} placeholder='Kapoor' name='lastname' value={loginData.lastname} />

        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" onChange={handleChange} placeholder='ankitkapoor@gmail.com' value={loginData.email} />

        <label htmlFor=""   >Password</label>
        <input type="password" onChange={handleChange} name="password" id="" value={loginData.password} />

        <label htmlFor="">Student</label>
        <input type="radio" name="" id="" />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default BasicForm;