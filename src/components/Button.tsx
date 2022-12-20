import {Slot} from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    asChild?: boolean,
    children: ReactNode,
    className?: string,
}
export const Button = ({asChild, children, className, ...rest}:ButtonProps) => {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp className={
            clsx(
                `
                bg-cyan-500 rounded flex  justify-center  py-3 px-3 text-sm 
                text-black w-full font-semibold 
                transition-colors
                hover:bg-cyan-300
                focus: ring-2 ring-white
                `,
                className
            )
        }>
            {children}
        </Comp>
    )
}   