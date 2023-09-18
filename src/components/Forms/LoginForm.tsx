import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { Button, CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'

import { setAccessToken } from '../../App'
import { InputControl } from '../../controls/form/input/Input'
import { PasswordInput } from '../../controls/form/input/PasswordInput'
import { signinQuery } from '../../database/queries/User/signin_query'

import './styles.css'

type FormValues = {
  email: string
  password: string
}

export const LoginForm: React.FC = () => {
  const navigate = useNavigate()

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

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  if (data && data.login && data.login.user) {
    setAccessToken(data.login.access_token)
    localStorage.setItem('login', data.login.user.email)
    navigate('/', { replace: true })
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
            <InputControl name="email" control={control} defaultValue="" />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PasswordInput
                  setPassword={field.onChange}
                  handleMouseDownPassword={handleMouseDownPassword}
                />
              )}
            />
            <div className="login_notification">
              {error ? <span className="error_message"> {error?.message}. Try again</span> : ''}
              {loading ? <CircularProgress /> : ''}
            </div>
            <Button className="sing_in_button caps_title" type="submit" variant="contained">
              sign in
            </Button>
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
