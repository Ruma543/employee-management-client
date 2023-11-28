// import React from 'react';
import { Tooltip } from 'flowbite-react';
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const BerChart = ({ employeeData }) => {
  const barChartData = employeeData.map(data => ({
    name: data.month,
    pv: parseInt(data.salary),
  }));
  console.log(barChartData);

  return (
    <div>
      <ResponsiveContainer width={300} aspect={2}>
        <BarChart data={barChartData} width={200} height={400}>
          <XAxis dataKey="name"></XAxis>
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#8883d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BerChart;
