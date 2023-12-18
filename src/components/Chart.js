import React, { useState, useEffect } from "react";
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
    const [width, setWidth] = useState(window.innerWidth);
  
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    let chartWidth;
    let marginLeft;
    let marginRight;
    
  
    if (width >= 1400) {
      chartWidth = 1275;
      marginLeft = 50;
      marginRight = 35;
    } else if (width >= 1200) {
      chartWidth = 1125;
      marginLeft = 35;
      marginRight = 50;
    } else if (width >= 992) {
      chartWidth = 925;
      marginLeft = 35;
      marginRight = 30;
    } else if (width >= 768) {
      chartWidth = 725;
      marginLeft = 15;
      marginRight = 50;
    } else if (width >= 576) {
      chartWidth = 500;
      marginLeft = 20;
      marginRight = 10;
    } else {
      chartWidth = 0;
      marginLeft = 0;
      marginRight = 5;
    }
  
    return (
      <div>
        <BarChart
          width={chartWidth}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: marginRight,
            left: marginLeft,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" style={{ fontWeight: 'bold', color: "black" }} />
          <Bar dataKey="uv" stackId="a" fill="#000000" />
        </BarChart>
      </div>
    );
  }
export default Chart;