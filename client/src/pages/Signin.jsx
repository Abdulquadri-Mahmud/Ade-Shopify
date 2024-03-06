import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../components/GoogleAuth'

export default function Signin() {
  return (
    <div className='flex justify-center items-center mt-4 p-6'>
      <div className="md:w-[60%] w-[100%] bg-slate-700 p-6 rounded">
        <div className="">
            <h1 className='text-center font-semibold text-3xl text-slate-50'>Welcome Back</h1>
        </div>
        <form className='pt-6'>
            <div className="grid grid-cols-1 gap-4">
                <div className="">
                    <input type="email" placeholder='Email' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold'/>
                </div>
                <div className="col-span-2">
                    <input type="password" placeholder='Password' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold'/>
                </div>
            </div>
            <div className="">
                <button type='submit' className='mt-5 p-3 w-full bg-slate-800 hover:opacity-80 duration-200 text-slate-100 font-semibold uppercase rounded'>SignUp</button>
            </div>
            <div className="">
                <GoogleAuth/>
            </div>
            <div className='flex pt-5 gap-2'>
                <p className='font-semibold text-slate-100'>Not have an account?</p>
                <Link to='/signup'>
                    <span className='font-semibold text-blue-700'>Sign Up</span>
                </Link>
            </div>
        </form>
      </div>
    </div>
  )
}
