import { Button } from '../src';
import React from 'react';
export default {
    title: 'My Component/Button',
    component: Button
};
const Template = (args) => React.createElement(Button, Object.assign({}, args));
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
//# sourceMappingURL=Button.stories.js.map