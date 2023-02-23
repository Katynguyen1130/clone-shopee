import React from 'react'
import type { RegisterOptions, UseFormRegister, useForm } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}

function Input({ type, errorMessage, register, name, className, placeholder, rules, autoComplete }: Props) {
  return (
    <div className='mt-2'>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={className}
        autoComplete={autoComplete}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}

export default Input
