import React from 'react';
import {Select} from '../src/components/Select';

export default {
  title: 'Components/common/Select',
  component: Select,
  argTypes: {
    label: {
        control: 'text',
        defaultValue: 'Select text',
    },
    value: {
        control: 'text',
        defaultValue: 'Maria',
    },
    onChange: {
        action: 'onChange',
    },
    options: {
        control: 'array',
        defaultValue: [
            { label: 'João', value: 'João' },
            { label: 'Maria', value: 'Maria' },
            { label: 'Pedro', value: 'Pedro' },
        ],
      },
  },
};

export const Default = args => <Select {...args} />;
