import { TextFieldProps } from '@mui/material'

export type MyInputProps = TextFieldProps & {
    id?: string
    label?: string
    isRequired?: boolean
    variant?: string
    onChangeProps?: any
} 

export type InputForHookFormProps = MyInputProps & {
    name: string
    defaultValue: string
    control: any
}