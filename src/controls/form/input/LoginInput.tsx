import React from 'react'
import { TextField } from '@mui/material'

interface LoginInputProps {
  onChangeProps: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const LoginInput: React.FC<LoginInputProps> = props => {
  const { onChangeProps } = props

  return (
    <TextField
      id="outlined-basic"
      label="Login"
      required
      variant="outlined"
      onChange={onChangeProps}
    />
  )
}
