import 'app/styles/index.scss'
import {StoryObj} from '@storybook/react'

type Story = StoryObj;

export const StyleDecorator = (story: () => Story) => story()