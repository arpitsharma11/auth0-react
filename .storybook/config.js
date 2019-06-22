import { addParameters, configure } from '@storybook/react';
import theme from './theme';
import { withInfo } from '@storybook/addon-info';
import { addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { setAddon } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

// import LiveEdit, {setOptions} from 'storybook-addon-react-live-edit';

// setOptions({ theme: 'darcula', presets: ['react'] });

// setAddon(LiveEdit);

const req = require.context('../src', true, /\.story.js$/);
addDecorator(addReadme);
addDecorator(withA11y)

// addDecorator(withA11y)

function loadStories() {
    // require('../stories/src/gettingStarted.js');

    req.keys().forEach(filename => req(filename));
}
// addDecorator(withInfo); // Globally in your .storybook/config.js.

addParameters({
    options: {
        showPanel: true,
        theme: theme,
        panelPosition: "right",

    }
});

configure(loadStories, module);
