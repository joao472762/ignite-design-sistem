import * as CheckboxRadix from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react'
export interface CheckBoxProps {}

export function CheckBox({}: CheckBoxProps) {
    return(   
        <CheckboxRadix.Root className='p-[2px] bg-gray800  h-6 w-6  rounded outline-none focus:ring-1 ring-cyan500'>
            <CheckboxRadix.Indicator asChild>
                <Check weight='bold' className='text-cyan500 h-5 w-5  '/>
            </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
    )
}

