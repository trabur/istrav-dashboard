import { addons } from '@storybook/addons';
import yourTheme from './YourTheme';

addons.setConfig({
  theme: yourTheme,
});

let measurementId = 'G-WLHS6B3F48'
window.STORYBOOK_GA_ID = measurementId
window.STORYBOOK_REACT_GA_OPTIONS = {}