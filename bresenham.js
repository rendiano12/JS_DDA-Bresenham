const xPointsBresenham = [];
const yPointsBresenham = [];
const pPointsBresenham = [];

const tableBresenham = document.querySelector('#tableBresenham');
// Menghitung m
function m(x0, x1, y0, y1) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const m = dy / dx;
  console.log(`m = ${m}`);
  if (0 < m && m < 1) {
    bresenham1(x0, x1, y0, y1);
    return `0 < m < 1`;
  } else if (m > 1) {
    bresenham2(x0, x1, y0, y1);
    return `m > 1`;
  } else {
    bresenham3(x0, x1, y0, y1);
    return `-1 < m < 0`;
  }
}

// Jika 0 < m < 1
function bresenham1(x0, x1, y0, y1) {
  let dx = x1 - x0;
  let dy = y1 - y0;
  let p = (2 * Math.abs(dy)) - Math.abs(dx);

  console.log(`x0 = ${x0}\nx1 = ${x1}\ny0 = ${y0}\ny1 = ${y1}\ndx = ${dx}\ndy = ${dy}`);
  let x = x0;
  let y = y0;
  xPointsBresenham.push(x);
  yPointsBresenham.push(y);
  let teks = '';
  teks += `<tr>
    <td>${p}</td>
    <td>${x}</td>
    <td>${y}</td>
    </tr>`;
  for (let i = 0; i < 100; i++) {
    if ((x == x1) && (y == y1)) break;
    if (p < 0) {
      x = x + 1;
      y = y;
      p = p + (2 * Math.abs(dy));
    } else {
      x = x + 1;
      y = y + 1;
      p = p + (2 * Math.abs(dy)) - (2 * Math.abs(dx));
    }
    teks += `<tr>
    <td>${p}</td>
    <td>${x}</td>
    <td>${y}</td>
    </tr>`;
    xPointsBresenham.push(x);
    yPointsBresenham.push(y);
    pPointsBresenham.push(p);
  }
  tableBresenham.innerHTML = `<tr>
  <th>p</th>
  <th>x</th>
  <th>y</th>
</tr> ${teks}`;
}

// Jika m > 1
function bresenham2(x0, x1, y0, y1) {
  let dx = x1 - x0;
  let dy = y1 - y0;
  let p = (2 * Math.abs(dx)) - Math.abs(dy);
  
  console.log(`x0 = ${x0}\nx1 = ${x1}\ny0 = ${y0}\ny1 = ${y1}\ndx = ${dx}\ndy = ${dy}`);
  let x = x0;
  let y = y0;
  xPointsBresenham.push(x);
  yPointsBresenham.push(y);
  let teks = '';
  teks += `<tr>
    <td>${p}</td>
    <td>${x}</td>
    <td>${y}</td>
    </tr>`;
  for (let i = 0; i < 100; i++) {
    if ((x == x1) && (y == y1)) break;
    if (p < 0) {
      y = y + 1;
      x = x;
      p = p + (2 * Math.abs(dx));
    } else {
      y = y + 1;
      x = x + 1;
      p = p + (2 * Math.abs(dx)) - (2 * Math.abs(dy));
    }
    teks += `<tr>
    <td>${p}</td>
    <td>${x}</td>
    <td>${y}</td>
    </tr>`;
    xPointsBresenham.push(x);
    yPointsBresenham.push(y);
    pPointsBresenham.push(p);
  }
  tableBresenham.innerHTML = `<tr>
  <th>p</th>
  <th>x</th>
  <th>y</th>
</tr> ${teks}`;
}

// Jika -1 < m < 0
function bresenham3(x0, x1, y0, y1) {
  let dx = x1 - x0;
  let dy = y1 - y0;
  let p = (2 * Math.abs(dy)) - Math.abs(dx);
  
  console.log(`x0 = ${x0}\nx1 = ${x1}\ny0 = ${y0}\ny1 = ${y1}\ndx = ${dx}\ndy = ${dy}`);
  let x = x0;
  let y = y0;
  xPointsBresenham.push(x);
  yPointsBresenham.push(y);
  let teks = '';
  teks += `<tr>
    <td>${p}</td>
    <td>${x}</td>
    <td>${y}</td>
    </tr>`;
  for (let i = 0; i < 100; i++) {
    if ((x == x1) && (y == y1)) break;
    if (p < 0) {
      y = y;
      x = x + 1;
      p = p + (2 * Math.abs(dy));
    } else {
      y = y - 1;
      x = x + 1;
      p = p + (2 * Math.abs(dy)) - (2 * Math.abs(dx));
    }
    teks += `<tr>
    <td>${p}</td>
    <td>${x}</td>
    <td>${y}</td>
    </tr>`;
    xPointsBresenham.push(x);
    yPointsBresenham.push(y);
    pPointsBresenham.push(p);
  }
  tableBresenham.innerHTML = `<tr>
  <th>p</th>
  <th>x</th>
  <th>y</th>
</tr> ${teks}`;
}

// Panggil Data
const panggilData = m(2, 4, 1, 7);

// Define Data
const dataBresenham = [{
  x: xPointsBresenham,
  y: yPointsBresenham,
  mode: "default"
}];

const title = {title: panggilData};

// Display using Plotly
Plotly.newPlot("plotBresenham", dataBresenham, title);