import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const data = {
    labels: ['Transport', 'Food', 'Clothing'],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ['aqua', 'orange', 'purple'],
      },
    ],
  };

  const options = {}; // You can customize chart options here

  return (
    <div>
      <div>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default Chart;
