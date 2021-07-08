import React from 'react';

import ComparisonChart from '../HightChartReact/ComparisonChart';

export default {
  title: 'Components/ComparisonChart',
  component: ComparisonChart,
};

const Template = (args) => <ComparisonChart {...args} />;

export const ComparisonChartComponent = Template.bind({});
ComparisonChartComponent.args = {
  categories: [
    {
      name: 'Region 1',
      categories: ['Division A', 'Division B'],
    },
    {
      name: 'Region 2',
      categories: ['Division D', 'Division E'],
    },
    {
      name: 'Region 3',
      categories: ['Division F', 'Division G'],
    },
  ],
  data: [-2.1, -1, -4, -3, -9, 20, 12],
  comparisonWith: 'CHAI',
};
