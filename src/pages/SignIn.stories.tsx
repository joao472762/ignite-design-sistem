import {Meta, StoryObj} from '@storybook/react'
import { SignIn } from './SignIn'
import {within,userEvent, waitFor} from '@storybook/testing-library'
import {expect} from '@storybook/jest'
import {rest} from 'msw'

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        handlers: [
            rest.post('/users', (req, res, ctx) => {
                return res()
            })
        ]
    }
} as Meta

export const Default: StoryObj = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        userEvent.type(canvas.getByPlaceholderText('johw@example.com'), 'vitorkabuls@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('******'), 'juventos@1')

        userEvent.click(canvas.getByRole('button'))
        await waitFor(() => {
            return expect(canvas.getByText('formulário enviado')).toBeInTheDocument()
        })
    }
}