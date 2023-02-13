import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { logo } from 'src/assets/logo/logo'
import Input from 'src/components/Input'

function Login() {
  const {} = useForm()
  return (
    <div className='bg-mainorange'>
      <div className=' max-w-7xl mx-auto'>
        <div className='container flex flex-row h-[500px]  '>
          <div className='w-0 h-0 lg:w-[50%] lg:h-[500px] md:block md:bg-login-page  bg-no-repeat '></div>
          <div className='grid grid-cols-1 py-12lg:grid-cols-8 lg:py-12 lg:pr-10 min-w-[500px]'>
            <div className='lg:col-span-8 lg-col-start-2 ml-10'>
              <form className='p-10 rounded bg-white shadow-sm'>
                <div className='text-2xl text-mainorange'>Log In</div>
                <div className='mt-8'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='p-3 w-full outline-none border
                   border-gray-300 focus:border-gray-500 rounded-sm'
                  />
                  <div className='mt-1 text-red-600 min-h-[1rem] text-sm'> </div>
                </div>
                <div className='mt-2'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='p-3 w-full outline-none border
                   border-gray-300 focus:border-gray-500 rounded-sm'
                  />
                  <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
                </div>
                <div className='mt-2'>
                  <button className='w-full text-center py-3 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                    Log In
                  </button>
                </div>
                <div className='mt-6 text-center '>
                  <div className='flex items-center justify-center'>
                    <span className='text-slate-400'>New to Shopee?</span>
                    <Link className='text-mainorange cursor-pointer pl-2' to='/register'>
                      sign up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
