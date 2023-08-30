import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

import { InputForHookFormProps, MyInputProps } from './type'

export const Input: React.FC<MyInputProps> = props => {
  const { id, label, isRequired, variant, onChangeProps } = props
  console.log(onChangeProps)

  return (
    <TextField
      id={id}
      label={label}
      required={isRequired}
      variant={variant}
      onChange={onChangeProps}
    />
  )
}

export const InputForHookForm: React.FC<InputForHookFormProps> = props => {
  const { name, control, defaultValue } = props
  console.log(typeof control)

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <Input
          id="outlined-basic"
          label="Login"
          isRequired={true}
          variant="outlined"
          onChangeProps={field.onChange}
        />
      )}
    />
  )
}
