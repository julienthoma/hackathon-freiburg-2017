import React from 'react';
import { BarChart } from 'react-easy-chart';

const MyBarChart = ({ xLabel, yLabel, data, height, width}) => (
  <div className="my-chart">
      <BarChart
        axisLabels={{x: xLabel, y: yLabel}}
        axes
        height={height}
        width={width}
        grid
        colorBars
        data={data}
      />
  </div>
);

MyBarChart.defaultProps = {
  height: 450,
  width: 300
};

export default MyBarChart;
