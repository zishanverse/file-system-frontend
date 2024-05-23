"use client";
import React from 'react'
import {useState} from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { useCookies } from 'next-client-cookies';
import Style from '../style.module.css';

const SignUp = () => {
    const [email_phone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [site_name, setSiteName] = useState("");
  const [category, setCategory] = useState("");
  const jwt = useCookies().get("jwt_token");
  const url = 'http://localhost:4000';

  const signup = async(e: any) => {
    e.preventDefault();
    try {
      const userDetails = {email_phone, password, created_at: JSON.stringify(new Date()), site_name}
      const options = {method: "POST",url: `${url}/api/signup/`, data: userDetails}
      const response = await axios(options);
      
      useCookies().set("jwt_token", response.data.jwtToken);
      redirect("/");
    }
    catch (err: any) {
      setError(err.response);
    }
  }
  if (jwt !== undefined) {
    return redirect("/login");
  }
  return (
    <div className={`flex flex-col justify-center items-center h-full ${Style.formContainer}`}>
        <h1 className='mt-5 mb-5'>Sign Up</h1>
    <form onSubmit={signup} className='flex flex-col justify-center bg-slate-500 p-5 rounded-xl'>
        <label htmlFor='email' className={Style.label}>Email</label>
        <input id="email" className={Style.input} value={email_phone} onChange={(e) => setEmailPhone(e.target.value)} placeholder='Enter Email'/>
        <label htmlFor='pass' className={Style.label}>Password</label>
        <input id="pass" className={Style.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
        <label htmlFor='name' className={Style.label}>Name Your Site</label>
        <input id="name" className={Style.input} value={site_name} onChange={(e) => setSiteName(e.target.value)} placeholder='Enter Site Name'/>
        <select value={category} onChange={e => setCategory(e.target.value)} className={Style.input}>
            <option value="normal" selected >Normal</option>
            <option value="wordpress" >Wordpress</option>
        </select>
        <button type='submit'className={Style.button}>signup</button>
        
    </form></div>
  )
}

export default SignUp