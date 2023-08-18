import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { SIGNUP_MUTATION } from '../../database/queries/UserQueries'

interface SignUpFormProps {
  isAuthenticatedUser: Boolean
}

export const SignUpForm: React.FC<SignUpFormProps> = props => {
  const { isAuthenticatedUser } = props

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [signUpRequest, { loading, data, error }] = useMutation(SIGNUP_MUTATION)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await signUpRequest({
        variables: {
          email: login,
          password: password
        }
      })
    } catch (error1) {
      console.log('Error', error1)
    }
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  if (data && data.signup && data.signup.user) {
    console.log(data.signup)
  }

  return (
    <div className="login_div">
      {!isAuthenticatedUser ? (
        !loading ? (
          <div className="login_form">
            <div className="login_welcome_div">
              <h1 className="login_welcome"> Register Now </h1>
              <span className="login_welcome_phrase">Welcome! Sign up to continue.</span>
            </div>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { mb: '10px', width: '60ch' }
              }}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="login_form_div">
                <TextField
                  id="outlined-basic"
                  label="Login"
                  variant="outlined"
                  required
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setLogin(event.target.value)
                  }}
                />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    label="Password"
                    required
                    type={showPassword ? 'text' : 'password'}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setPassword(event.target.value)
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {error ? <p className="error_message"> {error?.message}. Try again</p> : ''}
                <Button className="sing_in_button" type="submit" variant="contained">
                  SIGN UP
                </Button>
              </div>
            </Box>
          </div>
        ) : (
          <CircularProgress />
        )
      ) : (
        <span> You already have an account </span>
      )}
    </div>
  )
}
