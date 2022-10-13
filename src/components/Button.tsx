import {Slot} from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
    asChild?: boolean,
    children: ReactNode
}
export const Button = ({asChild, children, ...rest}:ButtonProps) => {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp className={
            clsx(
                `
                bg-cyan500 rounded flex  justify-center  py-3 px-3 text-sm 
                text-black w-full font-semibold 
                transition-colors
                hover:bg-cyan300
                focus: ring-2 ring-white
                `,{

                }
            )
        }>
            {children}
        </Comp>
    )
}   