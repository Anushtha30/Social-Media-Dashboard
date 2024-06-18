// script.js

// Chart.js code to generate the engagement chart
const ctx = document.getElementById('engagement-chart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Engagement',
            data: [10, 20, 30, 40, 50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Engagement Over Time'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});