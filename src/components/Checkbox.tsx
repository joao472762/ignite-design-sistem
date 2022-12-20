import * as CheckboxRadix from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react'
export interface CheckBoxProps extends CheckboxRadix.CheckboxProps {}

export function CheckBox({...props}: CheckBoxProps) {
    return(   
        <CheckboxRadix.Root {...props} className='p-[2px] bg-gray-800  h-6 w-6  rounded outline-none focus:ring-1 ring-cyan-500'>
            <CheckboxRadix.Indicator asChild>
                <Check weight='bold' className='text-cyan-500 h-5 w-5  '/>
            </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
    )
}

