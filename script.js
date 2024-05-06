const data = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May','June','July','Aug','Sep','Oct','Nov','Dec'],
  datasets: [{
      label: 'Monthly Sales Data ',
      backgroundColor: [    'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',  
      'rgb(82,218,213)',
      'rgb(168,82,218)',
      'rgb(82,218,132)',
      'rgb(93,21,129)',
      'rgb(215,226,57)',
      'rgb(77,242,247)',
      'rgb(186,124,52)',

    ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(82,218,213)',
        'rgb(168,82,218)',
            'rgb(82,218,132)',
            'rgb(93,21,129)',
            'rgb(215,226,57)',
            'rgb(77,242,247)',
            'rgb(186,124,52)',

       ],
        borderWidth: 2,
        borderRadius:8,
      data: [65, 58, 80, 83, 56,67,46,98,49,64,95,84],
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
              text: 'Monthly Sales Data(2023)',
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