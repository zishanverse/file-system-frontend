"use client";
import React from 'react'
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import Style from '../style.module.css';

const FormEle = () => {
    const [email_phone, setEmailPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const url = "http://localhost:4000";

    const login = async (e: any) => {
        e.preventDefault();
        const userDetails = {email_phone, password};
        const options = {
            method: "POST",
            url: `${url}/login/`,
            data: userDetails
        }
        try {
            const res = await axios(options);
            useCookies().set("jwt_token", res.data.jwtToken);
            redirect("/");
        }
        catch (err: any){
            console.log(err);
        }

    }
  return (
    <form onSubmit={login} className='flex flex-col justify-center bg-slate-500 p-5 rounded-xl'>
            <label htmlFor='email' className={Style.label}>Email</label>
            <input id="email" className={Style.input} value={email_phone} onChange={(e) => setEmailPhone(e.target.value)} placeholder='Enter Email'/>
            <label htmlFor='pass' className={Style.label}>Password</label>
            <input id="pass" className={Style.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
            <button type="submit" className={Style.button}>login</button>
            </form>
  )
}

export default FormEle