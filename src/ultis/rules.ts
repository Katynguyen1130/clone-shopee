import { UseFormGetValues, type RegisterOptions } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// React hook form rules
type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (retreiveValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Please enter an valid email '
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Your email is not valid, please try again'
    },
    maxLength: {
      value: 160,
      message: 'Email length is 7-160 letters'
    },
    minLength: {
      value: 7,
      message: 'Email length is 7-160 letters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Please enter an valid password '
    },

    maxLength: {
      value: 160,
      message: 'Pasword length is 6-160 letters'
    },
    minLength: {
      value: 6,
      message: 'Pasword length is 6-160 letters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Please confirm the password '
    },

    maxLength: {
      value: 160,
      message: 'Pasword length is 6-160 letters'
    },
    minLength: {
      value: 6,
      message: 'Pasword length is 6-160 letters'
    },
    validate:
      typeof retreiveValues === 'function'
        ? (value) => value === retreiveValues('password') || "Confirm password doesn't match"
        : undefined
  }
})

// Yup scheam validation
export const schema = yup
  .object({
    email: yup
      .string()
      .required('Please enter an valid email')
      .email('Your email is not valid, please try again')
      .min(7, 'Email length is 7-160 letters')
      .max(160, 'Email length is 7-160 letters'),
    password: yup
      .string()
      .required('Please enter an valid password ')
      .min(6, 'Pasword length is 6-160 letters')
      .max(160, 'Pasword length is 6-160 letters'),
    confirm_password: yup
      .string()
      .required('Please confirm the password')
      .min(6, 'Pasword length is 6-160 letters')
      .max(160, 'Pasword length is 6-160 letters')
      .oneOf([yup.ref('password')], "Confirm password doesn't match")
  })
  .required()

export type Schema = yup.InferType<typeof schema>
const loginSchema = schema.omit(['confirm_password'])
export type LoginSchema = yup.InferType<typeof loginSchema>
