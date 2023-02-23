import { ResponseApi } from './utils.type'
import { User } from './user.type'
export type AuthResponse = ResponseApi<{
  acess_token: string
  expires: string
  user: User
}>
