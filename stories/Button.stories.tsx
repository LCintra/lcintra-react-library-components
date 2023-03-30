import { Button } from '../src'
import { ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'My Component/Button',
  component: Button
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  variant: 'primary',
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'My First Button'
  },
};