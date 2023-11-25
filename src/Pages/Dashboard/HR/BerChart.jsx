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
  return (
    // <h3>{employeeData.name}</h3>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={688}
        height={300}
        data="salary"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <h3>house</h3>
        <XAxis
          dataKey="month"
          scale="point"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey={employeeData.salary}
          fill="#8884d8"
          background={{ fill: '#eee' }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BerChart;
