import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';
export interface TextProps {
    size ?: 'xs'  | 'sm' | 'md' 
    children: ReactNode,
    asChild?: boolean
}

export function Text({size = 'md',children, asChild,...rest}: TextProps){
    const Comp =  asChild ? Slot : 'span'
    return (
    <Comp {...rest} className={
        clsx(
            'text-gray100 text-md',
            {
                'text-xs': size === 'xs',
                'text-sm': size === 'sm',
            })
        }
    > 
        {children}
    </Comp>
    )
}