const xPointsDDA = [];
const yPointsDDA = [];

const tableDDA = document.querySelector('#tableDDA');
function dda(x0, x1, y0, y1) {
  let dx = x1 - x0;
  let dy = y1 - y0;
  
  let steps = 0;
  if (Math.abs(dx) > Math.abs(dy)) {
    steps = Math.abs(dx);
  } else {
    steps = Math.abs(dy);
  }

  let xInc = dx / steps;
  let yInc = dy / steps;

  console.log(`x0 = ${x0}\nx1 = ${x1}\ny0 = ${y0}\ny1 = ${y1}\ndx = ${dx}\ndy = ${dy}\nstep = ${steps}\nx_inc = ${xInc}\ny_inc = ${yInc}`);
  let x = x0;
  let y = y0;
  xPointsDDA.push(x);
  yPointsDDA.push(y);
  let teks = '';
  teks += `<tr>
    <td>${x}</td>
    <td>${y}</td>
    </tr>`;
  for (let i = 0; i < steps; i++) {
    x += xInc;
    y += yInc;
    x = Math.round(x);
    y = Math.round(y);
    xPointsDDA.push(x);
    yPointsDDA.push(y);
    teks += `<tr>
    <td>${x}</td>
    <td>${y}</td>
    </tr>`;
  }
  tableDDA.innerHTML = `<tr>
  <th>x</th>
  <th>y</th>
  </tr> ${teks}`;
}

// Panggil Data
dda(2, 8, 1, 5);

// Define Data
const dataDDA = [{
  x: xPointsDDA,
  y: yPointsDDA,
  mode: "default"
}];

// Display using Plotly
Plotly.newPlot("plotDDA", dataDDA);