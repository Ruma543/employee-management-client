// import React from 'react';
import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const BerChart = ({ employeeData }) => {
  console.log(employeeData);
  console.log(employeeData.length);

  const barChartData = employeeData.map(data => {
    return { name: data.month, pv: data.salary };
  });

  return (
    <>
      {/* <h3>{employeeData.length}</h3> */}
      <BarChart
        // width="100%"
        // height="100%"
        width={688}
        height={300}
        data={barChartData}
        margin={{
          // top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={40}
      >
        <h3>house</h3>
        <XAxis
          dataKey=" name"
          scale="point"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis dataKey="pv" />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="10 3" />
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#2d3436' }} />
      </BarChart>
    </>
  );
};

export default BerChart;
