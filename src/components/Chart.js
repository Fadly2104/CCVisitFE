import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
      name: "2019",
      uv: 1000,
      pv: 2400,
      amt: 2400,
      desc: "United Tractors Command Center dibuat",
    },
    {
      name: "2020",
      uv: 2000,
      pv: 1398,
      amt: 2210,
      desc: "United Tractors Command Center dibuat",
    },
    {
      name: "2021",
      uv: 3000,
      pv: 9800,
      amt: 2290,
      desc: "United Tractors Command Center dibuat",
    },
    {
      name: "2022",
      uv: 4000,
      pv: 3908,
      amt: 2000,
      desc: "United Tractors Command Center dibuat",
    },
    {
      name: "2023",
      uv: 5000,
      pv: 4800,
      amt: 2181,
      desc: "United Tractors Command Center dibuat",
    },
  ];

  const renderCustomBarLabel = ({ payload, x, y, width, height, name }) => {
    return <text x={x + width / 2} y={y} fill="#000000" id="chalabel" textAnchor="middle" dy={-6}>{`${name}`}</text>;
  };
  
function Chart() {
  return (
    <div>
        <BarChart
          width={1250}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" style={{fontWeight: 'bold', color: "black"}} />
          <Bar dataKey="uv" stackId="a" fill="#000000" />
        </BarChart>
    </div>
  );
}
export default Chart;