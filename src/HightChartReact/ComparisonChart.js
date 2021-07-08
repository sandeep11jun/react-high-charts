import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighChartGrouped from 'highcharts-grouped-categories';
import BorderRadius from '../ChartUtils/BorderRadius';
HighChartGrouped(Highcharts);
BorderRadius(Highcharts);

function ComparisonChart({ categories, comparisonWith, data }) {
  useEffect(() => {
    let max = data[0];
    let min = data[0];
    const minLegend = { name: '±2%', data: [], color: 'red' };
    const maxLegend = { name: 'More than ±2%', data: [], color: 'green' };
    data.forEach((d) => {
      if (d < 0) {
        minLegend.data.push(d);
      } else {
        maxLegend.data.push(d);
      }
      if (min > d) {
        min = d;
      }
      if (max < d) {
        max = d;
      }
    });

    min = min - 10;
    max = max + 10;
    const series = [{ ...minLegend }, { ...maxLegend }];
    const chartConfig = getComparisonChartConfig({
      categories,
      comparisonWith,
      series,
      min,
      max,
    });
    Highcharts.chart('container', chartConfig);
  }, []);

  return <div className='chart' id='container' />;
}

export default ComparisonChart;

export const getComparisonChartConfig = ({
  categories,
  comparisonWith,
  series,
  min,
  max,
}) => ({
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
    tickWidth: 0,
    gridLineWidth: 1,
    labels: {
      autoRotation: false,
      style: {
        fontSize: 10,
      },
      groupedOptions: [
        {
          style: {
            fontWeight: 'bolder', // set red font for labels in 1st-Level
            border: '1px',
          },
        },
        {
          rotation: -45, // rotate labels for a 2nd-level
          align: 'right',
          style: {
            color: 'red', // set red font for labels in 1st-Level
          },
        },
        {
          rotation: -45, // rotate labels for a 2nd-level
          align: 'right',
          style: {
            color: 'red', // set red font for labels in 1st-Level
          },
        },
      ],
      rotation: 0, // 0-level options aren't changed, use them as always
    },
    categories,
  },
  yAxis: {
    max: max,
    min: min,
    gridLineWidth: 1,
    title: {
      text: '',
    },
    labels: {
      formatter: function () {
        if (this.value === 0) {
          return comparisonWith;
        }
        return `${this.value}%`;
      },
    },
  },
  legend: {
    enabled: true,
    floating: true,
    verticalAlign: 'bottom',
    align: 'left',
    y: 25,
  },
  plotOptions: {
    series: {
      borderRadiusTopLeft: '50%',
      borderRadiusTopRight: '50%',
      zones: [
        {
          value: -2,
          color: 'red',
        },
        {
          color: 'green',
        },
      ],
    },
  },
  series,
});
