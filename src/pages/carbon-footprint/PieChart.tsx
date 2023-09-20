import React from 'react';
import ReactApexChart from 'react-apexcharts';
import bg1Path from '../../assets/images/pie_bg_1.jpeg';
import bg2Path from '../../assets/images/pie_bg_2.jpeg';
import bg3Path from '../../assets/images/pie_bg_3.jpeg';
import bg4Path from '../../assets/images/pie_bg_4.jpeg';

const PieChart = () => {
  const state: any = {
    series: [44, 33, 54, 45],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
      fill: {
        type: 'image',
        opacity: 0.85,
        image: {
          src: [bg1Path, bg2Path, bg3Path, bg4Path],
          width: 25,
          imagedHeight: 25,
        },
      },
      stroke: {
        width: 4,
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#111'],
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          borderWidth: 0,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default PieChart;
