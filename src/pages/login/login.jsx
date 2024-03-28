import React from 'react'
import {useForm} from "react-hook-form"
import useLogin from './service/useLogin';
import Cookies from 'js-cookie';
import { saveState } from '../../config/storage';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const {register,reset,handleSubmit} = useForm();
    const {mutate} = useLogin();
    const navigate = useNavigate()

    const submit =(data)=>{
        mutate(data, {
            onSuccess:(res)=>{
                Cookies.set('user_token', res.accessToken);
                saveState("user", res.user)
                navigate("/app", {replace:true})
            }
        
        })


        reset();
    }
  return (
    <div className='bg-blue-200 fixed inset-0'>
      <form className='w-[600px] rounded p-5 bg-white absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'
       onSubmit={handleSubmit(submit)}>
        <h1 className='text-center'>Login</h1>
        <input {...register("email",{required:true})} placeholder='email'defaultValue={"xurshid.axmadjonov94@gmail.com"}
         className='my-2 w-full border px-2 py-1' type="email" />
        <input {...register("password",{required:true})} placeholder='password'
        className='my-2 w-full border px-2 py-1' defaultValue={"1234"} type="password" />

        <button className='border bg-green-500 py-[7px] px-[12px] rounded text-white my-[15px]' 
        type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Login
