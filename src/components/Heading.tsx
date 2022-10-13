import clsx from "clsx"
import { ReactNode } from "react"
import { Slot } from '@radix-ui/react-slot';


export interface HeadingProps {
    children: ReactNode,
    size?: 'lg' | 'xl' | '2xl',
    asChild?: boolean
}



export function Heading({children, size='xl',asChild,...rest}: HeadingProps){
    const Comp = asChild ? Slot : 'h2'

    return (
        <Comp {...rest} className={
            clsx('text-xl font-bold text-gray100',{
                'text-lg': size === 'lg',
                'text-2xl': size === '2xl'
            })
        }>
            {children} 
        </Comp>
    )
}