import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'

import { SigninButton } from '../../controls/form/buttons/SigninButton'
import { LoginInput } from '../../controls/form/input/LoginInput'
import { PasswordInput } from '../../controls/form/input/PasswordInput'
import { signinQuery } from '../../database/queries/User/signin_query'

import './styles.css'

interface LoginFormProps {
  setIsAuthenticatedUser: Function
}

type FormValues = {
  email: string
  password: string
}

export const LoginForm: React.FC<LoginFormProps> = ({ setIsAuthenticatedUser }) => {
  const [showPassword, setShowPassword] = useState(false)

  const { handleSubmit, control } = useForm<FormValues>()

  const [loginRequest, { loading, data, error }] = useLazyQuery(signinQuery)

  const onSubmit = (formData: FormValues) => {
    loginRequest({
      variables: {
        email: formData.email,
        password: formData.password
      }
    })
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  if (data && data.login && data.login.user) {
    setIsAuthenticatedUser(true)
    localStorage.setItem('token', data.login.access_token)
    return <Navigate replace to="/" />
  }

  return (
    <div className="login">
      <div className="login_form">
        <div className="login_welcome">
          <h1 className="login_welcome_h1"> Welcome Back</h1>
          <span className="login_welcome_phrase">Hello again! Sign in to continue.</span>
        </div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mb: '10px', width: '60ch' }
          }}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="login_form">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => <LoginInput onChangeProps={field.onChange} />}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PasswordInput
                  showPassword={showPassword}
                  setPassword={field.onChange}
                  handleClickShowPassword={handleClickShowPassword}
                  handleMouseDownPassword={handleMouseDownPassword}
                />
              )}
            />
            <div className="login_notification">
              {error ? <span className="error_message"> {error?.message}. Try again</span> : ''}
              {loading ? <CircularProgress /> : ''}
            </div>
            <SigninButton textOfButton="sign in" />
          </div>
          <div className="reset_password">
            <a href="#" className="reset_password_link caps_title">
              reset password
            </a>
          </div>
        </Box>
      </div>
    </div>
  )
}
