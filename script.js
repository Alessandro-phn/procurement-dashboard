const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
const budget = [400, 420, 410, 430, 450, 460];
const actual = [390, 415, 398, 420, 435, 445];

new Chart(document.getElementById('costChart'), {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      { label: 'Orçado (R$ mil)', data: budget, tension: .35, borderWidth: 3 },
      { label: 'Realizado (R$ mil)', data: actual, tension: .35, borderWidth: 3 }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: '#e5e7eb' } } },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,.12)' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,.12)' } }
    }
  }
});

new Chart(document.getElementById('savingsChart'), {
  type: 'bar',
  data: {
    labels: ['Diesel', 'Peças', 'Serviços', 'MRO'],
    datasets: [{ label: 'Saving %', data: [2.36, 30, 26, 12], borderWidth: 1 }]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: '#e5e7eb' } } },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,.12)' } }
    }
  }
});

const abc = [
  { supplier: 'Fornecedor A', cls: 'A', spend: 1200000 },
  { supplier: 'Fornecedor B', cls: 'A', spend: 950000 },
  { supplier: 'Fornecedor C', cls: 'B', spend: 400000 },
  { supplier: 'Fornecedor D', cls: 'C', spend: 150000 }
];

document.getElementById('abcTable').innerHTML = abc.map(item => `
  <tr>
    <td>${item.supplier}</td>
    <td><span class="class-pill">${item.cls}</span></td>
    <td>${currency.format(item.spend)}</td>
  </tr>
`).join('');

const suppliers = [
  { name: 'Fornecedor A', prazo: 98, qualidade: 99, score: 98.5 },
  { name: 'Fornecedor B', prazo: 95, qualidade: 97, score: 96.0 },
  { name: 'Fornecedor C', prazo: 92, qualidade: 94, score: 93.0 }
];

document.getElementById('supplierList').innerHTML = suppliers.map(s => `
  <div class="supplier">
    <div>
      <strong>${s.name}</strong>
      <small>Prazo ${s.prazo}% · Qualidade ${s.qualidade}%</small>
    </div>
    <span class="score">${s.score.toFixed(1)}</span>
  </div>
`).join('');

const leadTimes = [
  { etapa: 'Solicitação → Cotação', dias: 3 },
  { etapa: 'Cotação → Aprovação', dias: 2 },
  { etapa: 'Aprovação → Pedido', dias: 1 },
  { etapa: 'Pedido → Entrega', dias: 6 }
];
const totalLeadTime = leadTimes.reduce((sum, item) => sum + item.dias, 0);

document.getElementById('leadTimeList').innerHTML = leadTimes.map(item => `
  <div class="step">
    <span>${item.etapa}</span>
    <strong>${item.dias} dias</strong>
    <div class="bar"><span style="width:${(item.dias / totalLeadTime) * 100}%"></span></div>
  </div>
`).join('');
