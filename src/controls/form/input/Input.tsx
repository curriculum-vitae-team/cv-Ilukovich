import React from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { TextField } from '@mui/material'

import { InputProps } from './type'

export const Input: React.FC<InputProps> = props => {
  const { id, label, required, variant, onChange } = props

  return (
    <TextField id={id} label={label} required={required} variant={variant} onChange={onChange} />
  )
}

export const InputControl = <T extends FieldValues>(props: UseControllerProps<T> & InputProps) => {
  const { name, control, defaultValue } = props

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Input
          id="outlined-basic"
          label="Login"
          required={true}
          variant="outlined"
          onChange={field.onChange}
        />
      )}
    />
  )
}
