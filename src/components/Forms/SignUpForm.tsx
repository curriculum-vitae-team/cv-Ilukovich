import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Box, Button, CircularProgress } from '@mui/material'

import { InputControl } from '../../controls/form/input/Input'
import { PasswordInput } from '../../controls/form/input/PasswordInput'
import { signupMutation } from '../../database/queries/User/signup_query'
import { AppRoutes } from '../../path'

type FormValues = {
  email: string
  password: string
}

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate()

  const { handleSubmit, control } = useForm<FormValues>()

  const [signUpRequest, { loading, data, error }] = useMutation(signupMutation)

  const onSubmit = async (formData: FormValues) => {
    try {
      await signUpRequest({
        variables: {
          email: formData.email,
          password: formData.password
        }
      })
    } catch (requestError) {
      console.log('Error', requestError)
    }
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  if (data && data.signup && data.signup.user) {
    navigate(AppRoutes.login, { replace: true })
  }

  return (
    <div className="login">
      <div className="login_form">
        <div className="login_welcome">
          <h1 className="login_welcome_h1"> Register Now </h1>
          <span className="login_welcome_phrase">Welcome! Sign up to continue.</span>
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
            <Button
              className="sing_in_button caps_title"
              type="submit"
              variant="contained"
              color="primary"
            >
              sign up
            </Button>
          </div>
        </Box>
      </div>
    </div>
  )
}
