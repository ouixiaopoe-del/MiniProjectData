// ข้อมูลจำลองโดยตรงในไฟล์
const data = [
  {"date": "2026-09-01", "name": "ข้าวเปลือกหอมมะลิ", "category": "crops", "price": 15000, "region": "เหนือ"},
  {"date": "2026-09-02", "name": "ข้าวเปลือกหอมมะลิ", "category": "crops", "price": 15200, "region": "เหนือ"},
  {"date": "2026-09-03", "name": "ข้าวเปลือกหอมมะลิ", "category": "crops", "price": 15100, "region": "เหนือ"},
  {"date": "2026-09-04", "name": "ข้าวเปลือกหอมมะลิ", "category": "crops", "price": 15300, "region": "เหนือ"},
  {"date": "2026-09-05", "name": "ข้าวเปลือกหอมมะลิ", "category": "crops", "price": 15500, "region": "เหนือ"},
  {"date": "2026-09-01", "name": "ยางพารา", "category": "economic", "price": 68, "region": "ใต้"},
  {"date": "2026-09-02", "name": "ยางพารา", "category": "economic", "price": 70, "region": "ใต้"},
  {"date": "2026-09-03", "name": "ยางพารา", "category": "economic", "price": 69, "region": "ใต้"},
  {"date": "2026-09-04", "name": "ยางพารา", "category": "economic", "price": 72, "region": "ใต้"},
  {"date": "2026-09-05", "name": "ยางพารา", "category": "economic", "price": 75, "region": "ใต้"},
  {"date": "2026-09-05", "name": "ทุเรียนหมอนทอง", "category": "fruits", "price": 180, "region": "ตะวันออก"},
  {"date": "2026-09-05", "name": "ผักกาดหอม", "category": "vegetables", "price": 45, "region": "กลาง"}
];

// Render Charts
document.addEventListener('DOMContentLoaded', () => {
    // 1. Line Chart - แนวโน้มราคายางพารา
    const rubberData = data.filter(d => d.name === 'ยางพารา');
    new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
            labels: rubberData.map(d => d.date),
            datasets: [{
                label: 'ราคายางพารา (บาท/กก.)',
                data: rubberData.map(d => d.price),
                borderColor: '#2e7d32',
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    // 2. Bar Chart - เปรียบเทียบราคาพืชแต่ละชนิด
    const latestData = data.filter(d => d.date === '2026-09-05');
    new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: latestData.map(d => d.name),
            datasets: [{
                label: 'ราคาล่าสุด (บาท)',
                data: latestData.map(d => d.price),
                backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#9c27b0']
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    // 3. Donut Chart - สัดส่วนหมวดหมู่สินค้า
    new Chart(document.getElementById('pieChart'), {
        type: 'doughnut',
        data: {
            labels: ['พืชไร่', 'พืชเศรษฐกิจ', 'ผลไม้', 'ผักสด'],
            datasets: [{
                data: [1, 1, 1, 1],
                backgroundColor: ['#81c784', '#ffd54f', '#64b5f6', '#e57373']
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    // 4. Horizontal Bar Chart - ราคาตามภูมิภาค
    new Chart(document.getElementById('horizontalBarChart'), {
        type: 'bar',
        data: {
            labels: latestData.map(d => d.region),
            datasets: [{
                label: 'ราคาตามภูมิภาค (บาท)',
                data: latestData.map(d => d.price),
                backgroundColor: '#ffb74d'
            }]
        },
        options: { 
            indexAxis: 'y', 
            responsive: true, 
            maintainAspectRatio: false 
        }
    });
});