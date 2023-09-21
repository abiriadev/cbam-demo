import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TimeLineCharts = () => {
  const options: any = {
    series: [
      {
        data: [
          {
            x: 'All',
            y: [
              new Date('2019-02-27').getTime(),
              new Date('2019-03-17').getTime(),
            ],
            fillColor: '#775DD0',
          },
          {
            x: '1',
            y: [
              new Date('2019-02-27').getTime(),
              new Date('2019-03-05').getTime(),
            ],
            fillColor: '#008FFB',
          },
          {
            x: '2',
            y: [
              new Date('2019-03-04').getTime(),
              new Date('2019-03-08').getTime(),
            ],
            fillColor: '#00E396',
          },

          {
            x: '3',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-12').getTime(),
            ],
            fillColor: '#FEB019',
          },
          {
            x: '4',
            y: [
              new Date('2019-03-12').getTime(),
              new Date('2019-03-17').getTime(),
            ],
            fillColor: '#FF4560',
          },
        ],
      },
    ],
    chart: {
      height: 350,
      type: 'rangeBar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
    },

    dataLabels: {
      enabled: true,
      formatter: function (val: any, opts: any) {
        var label = opts.w.globals.labels[opts.dataPointIndex];
        return (
          label + ' : ' + Math.round((val[1] - val[0]) / 1000000) + ' CO2e/kWh'
        );
      },
      style: {
        colors: ['#f3f4f5', '#fff'],
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      row: {
        colors: ['#f3f4f5', '#fff'],
        opacity: 1,
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="rangeBar"
        height={300}
        width={700}
      />
    </div>
  );
};

export default TimeLineCharts;
