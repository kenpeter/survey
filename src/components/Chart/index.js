import React from 'react';
var BarChart = require("react-chartjs").Bar;

const Chart = ({ data }) =>  {
  return (
    <BarChart data={data} />
  );
};

export default Chart;



