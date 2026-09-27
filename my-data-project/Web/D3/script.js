// web/d3/script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // ข้อมูลจำลองสำหรับ D3.js
    const data = [
      {"name": "ข้าวหอมมะลิ", "price": 15500},
      {"name": "ยางพารา", "price": 75},
      {"name": "ทุเรียน", "price": 180},
      {"name": "ผักกาดหอม", "price": 45}
    ];

    const chartBox = document.getElementById('d3-bar-chart');
    if (!chartBox) return;

    // เคลียร์พื้นที่เดิม
    chartBox.innerHTML = '';

    // กำหนดขนาดตามพื้นที่ในหน้าเว็บ
    const margin = {top: 20, right: 20, bottom: 40, left: 60};
    const width = chartBox.clientWidth - margin.left - margin.right || 300;
    const height = 260 - margin.top - margin.bottom;

    // สร้าง SVG container
    const svg = d3.select("#d3-bar-chart")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // แกน X (ชื่อสินค้า)
    const x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(d => d.name))
      .padding(0.3);

    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
        .style("font-size", "12px")
        .style("font-family", "Prompt");

    // แกน Y (ราคา)
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.price)])
      .range([height, 0]);

    svg.append("g")
      .call(d3.axisLeft(y).ticks(5))
      .selectAll("text")
        .style("font-size", "10px");

    // วาดแท่งกราฟ
    svg.selectAll(".bar")
      .data(data)
      .join("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.price))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.price))
        .attr("fill", "#2e7d32");

    // ข้อความแจ้งสำหรับช่องที่เหลือ
    document.getElementById("d3-line-chart").innerHTML = "<p style='color:#666;'>[ D3 Line Chart Ready ]</p>";
    document.getElementById("d3-donut-chart").innerHTML = "<p style='color:#666;'>[ D3 Donut Chart Ready ]</p>";
    document.getElementById("d3-horizontal-chart").innerHTML = "<p style='color:#666;'>[ D3 Horizontal Bar Ready ]</p>";
});