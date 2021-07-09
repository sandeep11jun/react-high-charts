import React from 'react';

import TrendChart from '../HightChartReact/TrendChart';

export default {
  title: 'Components/TrendChart',
  component: TrendChart,
};

const Template = (args) => <TrendChart {...args} />;

export const TrendChartComponent = Template.bind({});
TrendChartComponent.args = {
  categories: ["1/31/2021", "2/28/2021", "3/31/2021", "4/30/2021", "5/31/2021"],
  data: {
    "CHAI": [7525430, 7536430, 7036430, 6836430, 6536430],
    "E2E": [7544730, 7514230, 7114230, 6914230, 6514230],
    "O9": [7544730, 7598820, 7198820, 7198820, 7098820],
  }
};
