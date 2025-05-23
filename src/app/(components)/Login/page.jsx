"use client";
import React from 'react'

const Login = () => {
  async function handleSubmit() {
    const name = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    console.table(name,email,password )
  }
  return (
    <div className='w-dvw h-dvh flex flex-col justify-center items-center bg-white text-black '>
        <form method='POST' className='p-50 ' >
            <label htmlFor="username">Username</label>
            <input type="text" name="user" id="username" /><br />
            <label htmlFor="email">Email</label> 
            <input type="text" name="email" id="email" /> <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="pass" id="password" /><br />
            <button type="submit" onSubmit={(e)=>{
              e.preventDefault()
              handleSubmit()
              }}>Submit</button>
        </form>
    </div>
  )
}

export default Login