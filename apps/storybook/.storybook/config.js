import { configure, addParameters, addDecorator } from '@storybook/react-native';
import { create } from '@storybook/theming';

import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
addParameters({
  options: {
    isFullscreen: false,
    showAddonsPanel: true,
    showSearchBox: false,
    panelPosition: 'right',
    sortStoriesByKind: true,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
    theme: create({
      base: 'light',
      brandTitle: 'Expo',
      brandUrl: 'https://github.com/expo/expo/tree/master/apps/storybook',
      gridCellSize: 12,
    }),
  },
});

function loadStories() {
  require('../stories/get-started/Introduction.stories');
  // automatically import all story js files that end with *.stories.js
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);