import { Box, Paper } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// const data = [
//   {
//     name: 'week 1',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'week 2',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'week 3',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'week 4',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'week 5',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'week 6',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'week 7',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const RenderLineChart = () => {
  const weatherData = useSelector((state) => state.weather.weeklyWeatherData);
  //   console.log('chart-----', weatherData);
  let data = [];
  if (weatherData) {
    data = weatherData.map((each, index) => ({
      name: `week ${index + 1}`,
      max: parseInt(each.temp.max) - 273,
      min: parseInt(each.temp.min) - 273,
    }));
  }
  console.log('dataaaaa', data);

  return (
    <Paper
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LineChart
        width={1200}
        height={700}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='max'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' dataKey='min' stroke='#82ca9d' />
      </LineChart>
    </Paper>
  );
};
export default RenderLineChart;

// let a = [
//   { name: 'week 1', max: 38, min: 27 },

//   { name: 'week 2', max: 36, min: 28 },

//   { name: 'week 3', max: 37, min: 27 },

//   { name: 'week 4', max: 36, min: 28 },

//   { name: 'week 5', max: 36, min: 28 },

//   { name: 'week 6', max: 36, min: 27 },

//   { name: 'week 7', max: 36, min: 26 },
// ];
