import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, number, text, withKnobs, object } from '@storybook/addon-knobs';

import { withPropsTable } from 'storybook-addon-react-docgen';

import Button from './index'
//import ButtonREADME from './3:ComponentREADME'
storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(withPropsTable)
    .addParameters({
        readme: {
            //          sidebar: ButtonREADME,
            codeTheme: 'atom-dark'
        },
    })
    .add('default', () => {
        return (
            <Button />
        );

    })