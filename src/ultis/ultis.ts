import { ErrorResponse } from '@remix-run/router'
import axios, { AxiosError } from 'axios'
import { HttpStatusCode } from 'src/constannts/httpStatusCode.emun'

export function isAxiosError<T>(err: unknown): err is AxiosError<T> {
  return axios.isAxiosError(err)
}

export function isAxiosUnprocessableEntityErr<formError>(err: unknown): err is AxiosError<formError> {
  return isAxiosError(err) && err?.response?.status === HttpStatusCode.UnprocessableEntity
}
