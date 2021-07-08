import React from 'react';

import App from '../App';

export default {
  title: 'Test/App',
  component: App,
};

const Template = (args) => <App {...args} />;

export const AppComponent = Template.bind({});
