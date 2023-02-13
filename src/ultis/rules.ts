import { UseFormGetValues, type RegisterOptions } from 'react-hook-form'

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
