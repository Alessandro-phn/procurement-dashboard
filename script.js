const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        font: { size: 12 }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: '#e2e8f0' }
    },
    x: {
      grid: { display: false }
    }
  }
};

new Chart(document.getElementById('savingsChart'), {
  type: 'bar',
  data: {
    labels: ['Diesel', 'Peças', 'Serviços', 'MRO', 'Indiretos'],
    datasets: [{
      label: 'Saving %',
      data: [2.36, 30, 26, 12, 8],
      backgroundColor: ['#2563eb', '#16a34a', '#0f766e', '#f59e0b', '#64748b'],
      borderRadius: 10
    }]
  },
  options: chartOptions
});

new Chart(document.getElementById('spendChart'), {
  type: 'doughnut',
  data: {
    labels: ['Diesel', 'Peças', 'Serviços', 'MRO', 'Materiais Indiretos'],
    datasets: [{
      label: 'Spend',
      data: [2000000, 500000, 300000, 250000, 450000],
      backgroundColor: ['#1d4ed8', '#16a34a', '#f59e0b', '#7c3aed', '#64748b'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

new Chart(document.getElementById('costChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Orçado',
        data: [400000, 420000, 410000, 430000, 450000, 460000],
        borderColor: '#64748b',
        backgroundColor: 'rgba(100, 116, 139, 0.1)',
        tension: 0.35,
        fill: true
      },
      {
        label: 'Realizado',
        data: [390000, 415000, 398000, 420000, 435000, 445000],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        tension: 0.35,
        fill: true
      }
    ]
  },
  options: chartOptions
});

new Chart(document.getElementById('leadChart'), {
  type: 'bar',
  data: {
    labels: ['Solicitação → Cotação', 'Cotação → Aprovação', 'Aprovação → Pedido', 'Pedido → Entrega'],
    datasets: [{
      label: 'Dias',
      data: [3, 2, 1, 6],
      backgroundColor: ['#2563eb', '#1d4ed8', '#16a34a', '#f59e0b'],
      borderRadius: 10
    }]
  },
  options: chartOptions
});

new Chart(document.getElementById('abcChart'), {
  type: 'bar',
  data: {
    labels: ['Fornecedor A', 'Fornecedor B', 'Fornecedor C', 'Fornecedor D', 'Fornecedor E'],
    datasets: [{
      label: 'Gasto R$',
      data: [1200000, 950000, 400000, 150000, 90000],
      backgroundColor: ['#1d4ed8', '#2563eb', '#16a34a', '#f59e0b', '#64748b'],
      borderRadius: 10
    }]
  },
  options: chartOptions
});
