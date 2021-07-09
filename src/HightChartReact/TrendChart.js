import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const numberFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

function TrendChart({categories, data}) {
    const options = {
      title: {
        text: 'Line chart',
        style: {
          display: 'none'
        }
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        symbolWidth: 5,
        symbolHeight: 8
      },
      xAxis: {
        type: "datetime",
        tickColor: '#FFFFFF',
        categories: categories,
        labels: {
          formatter: function() { 
            return Highcharts.dateFormat('%m/%d', Date.parse(this.value));
          }
        }
      },
      yAxis: {
        showFirstLabel: false,
        tickColor: '#FFFFFF',
        gridLineColor: '#ececec',
        title: {
          style: {
            display: 'none'
          }
        },
        labels: {
          formatter: (result) => {  
            return `${numberFormatter(result.value, 1)}`;
          }
        }
      },
      plotOptions: {
        series: {
          pointPlacement: 'on',
          marker: {
            enabled: false,
            // symbol: 'circle'
          }
        }
      },
      tooltip: {
        shared: true
      },
      series: [
        {
          type: 'line',
          name: 'CHAI OH',
          color: '#1ea7fd',
          data: data.CHAI
        },
        {
          type: 'line',
          name: 'E2E OH',
          color: '#48e448c7',
          data: data.E2E
        },
        {
          type: 'line',
          name: 'O9 OH',
          color: '#ccc',
          data: data.O9
        }
      ]
    };
    
    return <HighchartsReact highcharts={Highcharts} options={options} />
}
export default TrendChart;