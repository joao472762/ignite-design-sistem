import {Meta, StoryObj} from '@storybook/react'

import {Text, TextProps} from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args:{
        children: 'Lorem Ipsum',
    }
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small:  StoryObj<TextProps> = {
    args:{
        size: 'sm'
    },
 
}

export const ExtraSamall:  StoryObj<TextProps> = {
    args:{
        size: 'xs'
    }
}

export const CustomComponent:  StoryObj<TextProps> = {
    args:{
        asChild: true,
        children: (<p>testing with p tag </p>)
    },
    argTypes:{
        children:{
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}