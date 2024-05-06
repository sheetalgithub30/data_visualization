const data = {
  labels: ['CSK', 'RCB', 'LSG', 'GT', 'MI','RR','SRH','DC','PBKS','KKR'],
  datasets: [{
      label: 'IPL point table',
      backgroundColor: [
        '#ECFC0B',
        '#FC130B',
        '#4349F5',
        '#4D1C72',
        '#0B52F9',
        '#F214A8',
        '#FC8004',
        '#4A3AD8',
        '#FF0000',
        '#3F0776'
    ],
      borderColor: [
        '#ECFC0B',
        '#FC130B',
        '#4349F5',
        '#4D1C72',
        '#0B52F9',
        '#F214A8',
        '#FC8004',
        '#4A3AD8',
        '#FF0000',
        '#3F0776'

       ],
        borderWidth: 2,
        borderRadius:8,
      data: [12, 8, 12, 8, 6,16,12,10,8,16],
  }],
};


const config = {
  type: "bar",
  data: data,
  options: {
      responsive: true,
      plugins: {
          title: {
              display: true,
              text: 'INDIAN PREMIUM LEAGUE(2024)',
          },
      },
      onHover: (event, activeElements, chart) => {
        if (activeElements.length > 0) {
            const hoveredBar = activeElements[0];
            const datasetIndex = hoveredBar.datasetIndex;
            const index = hoveredBar.index;

            // Change background color of the hovered bar
            chart.data.datasets[datasetIndex].backgroundColor[index] = 'rgba(246, 10, 41, 0.7)'; // Example color

            // Update the chart
            chart.update();
        }
  },
}
};



const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, config);


myChart.options.plugins.tooltip = {
  callbacks: {
      label: function (context) {
          return `Sales: ${context.parsed.y}`;
      },
  },
};



anime({
  targets: myChart.canvas,
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeInOutQuad',
});

anime({
  targets: myChart.data.datasets[0].data,
  scale: [0, 1],
  duration: 4000,
  easing: 'easeOutElastic',
  update: function() {
    myChart.update();
  }
});