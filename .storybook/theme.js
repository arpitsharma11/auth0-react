import { create } from '@storybook/theming';

export default create({
    base: 'light',
    colorPrimary: '#2196F3',
    colorSecondary: '#1976D2',

    // UI
    appBg: '#ececee',
    appContentBg: 'white',
    appBorderColor: 'grey',
    appBorderRadius: 8,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#eee',
    barSelectedColor: '#2196F3',
    barBg: '#2e2e2e',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'Mpowered Storybook',
    brandUrl: '',
    brandImage: '',
});