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
    <div className="my-7 w-2/5 mx-auto">
      <ResponsiveContainer width={400} aspect={3}>
        <BarChart data={barChartData} width={400} height={400}>
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
