import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'

interface PasswordInputProps {
  setPassword: Function
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const PasswordInput: React.FC<PasswordInputProps> = props => {
  const { setPassword, handleMouseDownPassword } = props

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  return (
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
  )
}
