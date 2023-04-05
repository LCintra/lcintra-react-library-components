import React from 'react';
import {Button} from '../src/components/Button';

export default {
  title: 'Components/common/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    label: {
      control: 'text',
      defaultValue: 'Button text',
    },
    onClick: {
      action: 'onClick',
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
  },
};

export const Default = args => <Button {...args} />;
