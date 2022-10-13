import {Meta, StoryObj} from '@storybook/react'
import { CheckBox, CheckBoxProps } from './Checkbox'
import { Text } from './Text'

export default {
    title: 'Components/CheckBox',
    component: CheckBox
} as Meta<CheckBoxProps>


export const Default: StoryObj<CheckBoxProps> = {}

export const  WithMessage: StoryObj<CheckBoxProps> = {
    decorators: [
        (Story) => (
            <div className='flex content-center gap-2 '>
                {Story()}
                <Text size='xs'>
                    Lembre de mim
                </Text>
            </div>
        )
    ]
}