import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
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

import { SIGNIN_QUERY } from '../../database/queries/UserQueries'

import './styles.css'

interface LoginFormProps {
  setIsAuthenticatedUser: Function
  isAuthenticatedUser: Boolean
}

export const LoginForm: React.FC<LoginFormProps> = props => {
  const { setIsAuthenticatedUser, isAuthenticatedUser } = props

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [loginRequest, { loading, data, error }] = useLazyQuery(SIGNIN_QUERY)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    loginRequest({
      variables: {
        email: login,
        password: password
      }
    })
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  if (data && data.login && data.login.user) {
    setIsAuthenticatedUser(true)
  }

  return (
    <div className="login_div">
      {!isAuthenticatedUser ? (
        !loading ? (
          <div className="login_form">
            <div className="login_welcome_div">
              <h1 className="login_welcome"> Welcome Back</h1>
              <span className="login_welcome_phrase">Hello again! Sign in to continue.</span>
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
                  required
                  variant="outlined"
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
                  SIGN IN
                </Button>
              </div>
              <div className="reset_password_div">
                <a href="" className="reset_password_link">
                  RESET PASSWORD
                </a>
              </div>
            </Box>
          </div>
        ) : (
          <CircularProgress />
        )
      ) : (
        <span> You are already logged in</span>
      )}
    </div>
  )
}
