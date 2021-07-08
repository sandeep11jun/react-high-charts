export const chartConfig = {
  chart: {
    type: 'bar',
  },
  title: {
    text: '',
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    labels: {
      autoRotation: false,
      style: {
        fontSize: 10,
      },
    },
    categories: [
      {
        name: 'Region 1',
        categories: ['Division A', 'Division B', 'Division C'],
      },
      {
        name: 'Region 2',
        categories: ['Division D', 'Division E'],
      },
      {
        name: 'Region 3',
        categories: ['Division F', 'Division G', 'Division H', 'Division I'],
      },
    ],
  },
  yAxis: {
    title: {
      text: '',
    },
  },

  series: [
    {
      name: 'Divisions',
      data: [-20, -25, -15, -16, -20, -12, -25, -17, -30],
    },
  ],
};
