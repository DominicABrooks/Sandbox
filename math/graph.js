const { createCanvas } = require('canvas');
const Chart = require('chart.js/auto');

// Create a canvas with the desired dimensions
const canvas = createCanvas(800, 600);
const ctx = canvas.getContext('2d');

// Generate some random data for the chart
const labels = ['January', 'February', 'March', 'April', 'May'];
const data = [65, 59, 80, 81, 56];

// Create a new chart instance
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'My Data',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Save the chart as an image file
const imagePath = './chart.png';
const out = require('fs').createWriteStream(imagePath);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log(`Chart saved as ${imagePath}`));
