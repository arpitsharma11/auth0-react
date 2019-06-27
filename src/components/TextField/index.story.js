import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, number, text, withKnobs, object } from '@storybook/addon-knobs';

import { withPropsTable } from 'storybook-addon-react-docgen';

import TextField from '.'
//import TextFieldREADME from './3:ComponentREADME'
storiesOf('Text field', module)
    .addDecorator(withKnobs)
    .addDecorator(withPropsTable)
    .addParameters({
        readme: {
            //sidebar: TextFieldREADME,
            codeTheme: 'atom-dark'
        },
    })
    .add('default', () => {

        return (
            <TextField label="Email Id" />
        );

    })