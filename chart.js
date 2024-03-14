function renderChart(allPokemon, i) {
  const ctx = document.getElementById('myChart');
  let stats = [
    allPokemon[i]['stats'][0]['base_stat'],
    allPokemon[i]['stats'][1]['base_stat'],
    allPokemon[i]['stats'][2]['base_stat']
  ];
  let bgColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)'
  ];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HP', 'Attack', 'Defense'],
      datasets: [{
        data: stats,
        backgroundColor: bgColor,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Pokemon Data",
          font: {
            size: 18,
          },
        },
      },
      scales: {
        y: {
          max: 140
        }
      }
    }
  });
}
