import {InputHTMLAttributes, ReactNode} from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot({children}:TextInputRootProps){
    return (
        <div className= {
            `bg-gray800 rounded w-full h-12  flex items-center gap-3 px-4 py-3
            focus-within:ring-2 ring-cyan300`
        }>
            {children}
        </div>
    )
}
TextInputRoot.displayName = 'TextInput.Root'


interface TextInputIconProps {
    children: ReactNode
}
function TextInputIcon({children}: TextInputIconProps){
    return (
        <Slot className='h-6 w-6 text-gray400'>
            {children}
        </Slot>
    )
}
TextInputIcon.displayName = 'TextInput.Icon'


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{
}
function TextInputInput(props: TextInputInputProps){
    return (
        <input {...props} className='flex-1 bg-transparent  text-gray100 text-xs outline-none  placeholder:text-gray400 '/>
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}