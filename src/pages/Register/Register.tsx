import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'

import { schema, Schema } from './../../ultis/rules'
import Input from 'src/components/Input'
import { registerAccount } from './../../apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityErr } from 'src/ultis/ultis'
import { ResponseApi } from './../../types/utils.type'

type FormData = Schema

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  // mutation
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => console.log('success loged in', data),
      onError: (err) => {
        if (isAxiosUnprocessableEntityErr<ResponseApi<Omit<FormData, 'confirm_password'>>>(err)) {
          const formError = err.response?.data.data
          if (formError?.email) {
            setError('email', { message: formError.email, type: 'Server' })
          }
          if (formError?.password) {
            setError('password', { message: formError.password, type: 'Server' })
          }
        }
      }
    })
  })

  return (
    <div className='bg-mainorange'>
      <div className=' max-w-7xl mx-auto flex justify-center'>
        <div className='container flex flex-row h-[500px] '>
          <div className=' lg:min-w-[600px] h-full bg-login-page  bg-no-repeat '> </div>
          <div className='grid grid-cols-1 py-8 lg:grid-cols-8 lg:py-6 lg:pr-10 min-w-[500px]'>
            <div className='lg:col-span-8 lg-col-start-2 ml-10'>
              <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
                <div className='text-2xl text-mainorange mb-6'>Sign Up</div>
                <Input
                  name='email'
                  type='email'
                  errorMessage={errors.email?.message}
                  register={register}
                  className='p-3 w-full outline-none border
                    border-gray-300 focus:border-gray-500 rounded-sm'
                  placeholder='Email'
                />
                <Input
                  name='password'
                  type='password'
                  errorMessage={errors.password?.message}
                  register={register}
                  className='p-3 w-full outline-none border
                    border-gray-300 focus:border-gray-500 rounded-sm'
                  placeholder='Password'
                  autoComplete='on'
                />
                <Input
                  name='confirm_password'
                  type='password'
                  errorMessage={errors['confirm_password']?.message}
                  register={register}
                  className='p-3 w-full outline-none border
                    border-gray-300 focus:border-gray-500 rounded-sm'
                  placeholder='Confirm Password'
                  autoComplete='on'
                />

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
