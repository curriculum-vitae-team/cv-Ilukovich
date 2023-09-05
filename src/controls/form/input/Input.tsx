import React from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { TextField } from '@mui/material'

import { MyInputProps } from './type'

export const Input: React.FC<MyInputProps> = props => {
  const { id, label, isRequired, variant, onChangeProps } = props

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

export const InputControl = <T extends FieldValues>(
  props: UseControllerProps<T> & MyInputProps
) => {
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
          isRequired={true}
          variant="outlined"
          onChangeProps={field.onChange}
        />
      )}
    />
  )
}
