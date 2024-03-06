import React from 'react'
import GoogleAuth from '../components/GoogleAuth'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='w-full flex justify-center items-center p-4'>
      <div className="md:w-[60%] w-[100%] bg-slate-700 p-6 rounded">
        <div className="">
            <h1 className='text-center font-semibold text-3xl text-slate-50'>Signup To Ade-Shopify</h1>
        </div>
        <form className='pt-6'>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="">
                    <input type="text" placeholder='Username' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold'/>
                </div>
                <div className="">
                    <input type="text" placeholder='Country' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold'/>
                </div>
                <div className="">
                    <input type="text" placeholder='State' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold'/>
                </div>
                <div className="">
                    <input type="text" placeholder='Full Address' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold'/>
                </div>
                <div className="">
                    <input type="email" placeholder='Email' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold'/>
                </div>
                <div className="">
                    <input type="tel" placeholder='Mobile' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold'/>
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
                <p className='font-semibold text-slate-100'>Already have an account?</p>
                <Link to='/signin'>
                    <span className='font-semibold text-blue-700'>Sign In</span>
                </Link>
            </div>
        </form>
      </div>
    </div>
  )
}
