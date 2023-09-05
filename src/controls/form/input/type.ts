import { TextFieldProps } from '@mui/material'
import { ChangeEvent } from 'react'
// import { Control, FieldValues, UseControllerProps } from 'react-hook-form'

export type MyInputProps = TextFieldProps & {
    id?: string
    label?: string
    isRequired?: boolean
    variant?: string
    onChangeProps?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}  

