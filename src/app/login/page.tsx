"use client";
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import Style from '../style.module.css';
import FormEle from '../components/FormEle';

const Login = () => {
    
    const jwt = useCookies().get("jwt_token");
    


    
  
  if (jwt !== undefined) {
    return redirect("/");
  }

  return (
    <div className={`flex flex-col justify-center items-center h-full ${Style.formContainer}`}>
        <h1 className='mt-5 mb-5'>Login</h1>
        
        <FormEle />
        
    </div>
  )
}

export default Login