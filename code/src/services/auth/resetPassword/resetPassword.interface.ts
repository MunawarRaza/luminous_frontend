export interface ResetPasswordRequestInterface {
  username: string
  code: string
  password: string
}

export interface ResetPasswordResponseInterface {
  message: string
}
