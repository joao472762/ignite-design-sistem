import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';
export interface TextProps {
    size ?: 'xs'  | 'sm' | 'md' 
    children: ReactNode,
    asChild?: boolean,
    className?: string
}

export function Text({size = 'md',children, asChild,className}: TextProps){
    const Comp =  asChild ? Slot : 'span'
    console.log(size)
    return (
        <Comp className={
            clsx(
                'text-gray-100 text-sm',
                {
                    'text-md': size === 'md',
                    'text-xs': size === 'xs',
                },
                className
                )
                
            }
            
        > 
            {children}
        </Comp>
    )
}