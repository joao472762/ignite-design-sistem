import {Meta, StoryObj} from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps,  } from './TextInput'
import {EnvelopeSimple} from 'phosphor-react'


export default {
    title: 'Components/InputText',
    component: TextInput.Root,
    args: {
        children: (<TextInput.Input placeholder='type your email adresss' type='email'/>)
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
  
} as Meta<TextInputRootProps>


export const Default: StoryObj<TextInputRootProps> = {}

export const WithIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Icon>
                <EnvelopeSimple/>
            </TextInput.Icon>,
            <TextInput.Input placeholder='type your email adresss' type='email'/>
        ]
    }
}