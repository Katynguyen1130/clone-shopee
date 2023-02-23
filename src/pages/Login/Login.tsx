import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'

import { schema, Schema } from './../../ultis/rules'
import Input from 'src/components/Input'
import { login } from './../../apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityErr } from 'src/ultis/ultis'
import { ResponseApi } from './../../types/utils.type'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])

function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  // mutation
  const loginMutation = useMutation({
    mutationFn: (body: FormData) => login(body)
  })

  // function submit log in
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    loginMutation.mutate(data, {
      onSuccess: (data) => console.log('success loged in', data),
      onError: (err) => {
        if (isAxiosUnprocessableEntityErr<ResponseApi<FormData>>(err)) {
          const formError = err.response?.data.data
          if (formError?.email) {
            setError('email', { message: formError.email, type: 'Server' })
          }
          if (formError?.password) {
            setError('password', { message: formError.password, type: 'Server' })
          }
        }
        console.log(err)
      }
    })
  })

  return (
    <div className='bg-mainorange'>
      <div className=' max-w-7xl mx-auto'>
        <div className='container flex flex-row h-[500px]  '>
          <div className='w-0 h-0 lg:w-[50%] lg:h-[500px] md:block md:bg-login-page  bg-no-repeat '></div>
          <div className='grid grid-cols-1 py-12lg:grid-cols-8 lg:py-12 lg:pr-10 min-w-[500px]'>
            <div className='lg:col-span-8 lg-col-start-2 ml-10'>
              <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
                <div className='text-2xl text-mainorange'>Log In</div>
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
                <div className='mt-2'>
                  <button
                    type='submit'
                    className='w-full text-center py-3 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                  >
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
