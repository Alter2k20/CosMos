"use client";
import React, { useState } from 'react'

const Login = () => {
  
    const [formData, newFormData] = useState({
      username : "",
      email : "",
      password : ""
    })

    const handleChange = (event) =>{
      const {id,value} = event.target
      newFormData((prevFormData)=>({...prevFormData, [id]:value}))
      
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const {username, email, password} = formData
      // Perform validation here if needed
      if(formData.password.length < 8 || formData.password.length > 10){
        document.querySelector("#password").style.border = "2px solid red"
        document.querySelector("#error").innerHTML = "Password must be between 8 and 10 characters"
        return
      }else{
        document.querySelector("#password").style.border = "2px solid green"
        document.querySelector("#error").innerHTML = " "
      }
      // console.log(username, email, password) //for testing
      fetch('http://localhost:3000/api/user/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, email, password})
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.message === "success"){
          window.location.href = "/Editor"
        }else{
          window.location.href = "/Login"
          document.querySelector("#error").innerHTML = data.message
        }
      })
      .catch(error => console.error('Error:', error));
    }
  
  return (
    <div className='w-dvw h-dvh flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500'>
        <h1 className='text-4xl text-white font-bold mb-1'>Login</h1> 
        <form method='POST' className='w-[35vw] h-fit p-4 bg-white rounded text-black shadow-md grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" className='border border-gray-300 p-2 rounded' name="user" id="username" value={formData.username} onChange={handleChange}/>
            <label htmlFor="email">Email</label> 
            <input type="text" className='border border-gray-300 p-2 rounded' name="email" id="email" value={formData.email} onChange={handleChange}/> 
            <label htmlFor="password">Password</label>
            <input type="password" className='border border-gray-300 p-2 rounded' name="pass" id="password" value={formData.password} onChange={handleChange}/>
            <p id='error' className='text-red-500 w-fit text-sm'></p>
            <button type="submit" className='bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600 active:bg-blue-950'>Submit</button>
        </form>
        
    </div>
  )
}

export default Login