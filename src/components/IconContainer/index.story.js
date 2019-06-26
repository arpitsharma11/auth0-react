import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { boolean, number, text, withKnobs, object } from '@storybook/addon-knobs';

import { withPropsTable } from 'storybook-addon-react-docgen';

import IconContainer from '.'

storiesOf('Icon Container', module)
    .addDecorator(withKnobs)
    .addDecorator(withPropsTable)
    .addParameters({
        readme: {

            codeTheme: 'atom-dark'
        },
    })
    .add('icon container', () => {

        return (
            <IconContainer />
        );

    })