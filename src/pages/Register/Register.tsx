import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { getRules } from './../../ultis/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='bg-mainorange'>
      <div className=' max-w-7xl mx-auto'>
        <div className='container flex flex-row h-[500px]  '>
          <div className='w-0 h-0 lg:w-[50%] lg:h-[500px] md:block md:bg-login-page  bg-no-repeat '></div>
          <div className='grid grid-cols-1 py-8 lg:grid-cols-8 lg:py-6 lg:pr-10 min-w-[500px]'>
            <div className='lg:col-span-8 lg-col-start-2 ml-10'>
              <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
                <div className='text-2xl text-mainorange'>Sign Up</div>
                <div className='mt-8'>
                  <input
                    type='text'
                    placeholder='Email'
                    {...register('email', rules.email)}
                    className='p-3 w-full outline-none border
                   border-gray-300 focus:border-gray-500 rounded-sm'
                  />
                  <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'> {errors.email?.message} </div>
                </div>
                <div className='mt-2'>
                  <input
                    type='password'
                    {...register('password', rules.password)}
                    placeholder='Password'
                    autoComplete='on'
                    className='p-3 w-full outline-none border
                   border-gray-300 focus:border-gray-500 rounded-sm'
                  />
                  <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'> {errors.password?.message}</div>
                </div>
                <div className='mt-2'>
                  <input
                    type='password'
                    {...register('confirm_password', {
                      ...rules['confirm_password']
                    })}
                    placeholder='Confirm Password'
                    autoComplete='on'
                    className='p-3 w-full outline-none border
                   border-gray-300 focus:border-gray-500 rounded-sm'
                  />
                  <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>
                    {' '}
                    {errors['confirm_password']?.message}
                  </div>
                </div>
                <div className='mt-2'>
                  <button
                    type='submit'
                    className='w-full text-center py-3 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                  >
                    Sign Up
                  </button>
                </div>
                <div className='mt-6 text-center '>
                  <div className='flex items-center justify-center'>
                    <span className='text-slate-400'>Have an account?</span>
                    <Link className='text-mainorange cursor-pointer pl-2' to='/login'>
                      Log In
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

export default Register
