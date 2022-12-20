import clsx from "clsx"
import { ReactNode } from "react"
import { Slot } from '@radix-ui/react-slot';


export interface HeadingProps {
    children: ReactNode,
    size?: 'lg' | 'xl' | '2xl',
    asChild?: boolean,
    className?: string,
}



export function Heading({children, size='xl',asChild,className,...rest}: HeadingProps){
    const Comp = asChild ? Slot : 'h2'

    return (
        <Comp {...rest} className={
            clsx('text-xl font-bold text-gray-100',{
                'text-lg': size === 'lg',
                'text-2xl': size === '2xl'
            },
            className
            
            )
        }>
            {children} 
        </Comp>
    )
}