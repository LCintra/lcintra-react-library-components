"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const src_1 = require("../src");
const react_1 = __importDefault(require("react"));
exports.default = {
    title: 'My Component/Button',
    component: src_1.Button
};
const Template = (args) => react_1.default.createElement(src_1.Button, Object.assign({}, args));
const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    variant: 'primary',
};
exports.Primary = {
    args: {
        variant: 'primary',
        children: 'My First Button'
    },
};
//# sourceMappingURL=Button.stories.js.map