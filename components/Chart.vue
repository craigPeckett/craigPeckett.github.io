<template>
  <canvas id="canvas">
    <p>Your browser does not support the canvas element.</p>
  </canvas>
</template>
<script>
require("chart.js");

let type = 0,
  types = ["bar",  "pie", "doughnut",  "line"],
  canvas = null,
  ctx = null,
  myChart = null;

export default {
  mounted() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.translate(0.5, 0.5);
    ctx.imageSmoothingEnabled = false;
    this.draw(ctx);
    setInterval(_ => {
      if (type < types.length - 1) type++;
      else type = 0;
      myChart.destroy();
      this.draw(ctx);
    }, 10000);
  },
  methods: {
    draw(ctx) {
      myChart = new Chart(ctx, {
        type: types[type],
        data: {
          labels: [
            "HTML5",
            "CSS3",
            "Javascript",
            "Bootstrap",
            "Sass",
            "JQuery",
            "Vue JS",
            "Vuetify",
            "Node JS",
            "Firebase",
            "MongoDB",
            "Nuxt JS"
          ],
          datasets: [
            {
              label: ["Skill Level"],
              data: [81, 62, 67, 74, 20, 58, 79, 82, 23, 34, 22, 56],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)", // HTML5
                "rgba(54, 162, 235, 0.2)", // CSS3
                "rgba(255, 206, 86, 0.2)", // Javascript
                "rgba(153, 102, 255, 0.2)", // Bootstrap
                "rgba(255, 99, 132, 0.2)", // Sass
                "rgba(54, 162, 235, 0.2)", // JQuery
                "rgba(75, 192, 192, 0.2)", // Vue
                "rgba(54, 162, 235, 0.2)", // Vuetify
                "rgba(100, 255, 100, 0.2)", // Node
                "rgba(255, 159, 64, 0.2)", // Firebase
                "rgba(100, 255, 100, 0.2)", // Mongo
                "rgba(75, 192, 192, 0.2)" // Nuxt
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)", // HTML5
                "rgba(54, 162, 235, 1)", // CSS3
                "rgba(255, 206, 86, 1)", // Javascript
                "rgba(153, 102, 255, 1)", // Bootstrap
                "rgba(255, 99, 132, 1)", // Sass
                "rgba(54, 162, 235, 1)", // JQuery
                "rgba(75, 192, 192, 1)", // Vue
                "rgba(54, 162, 235, 1)", // Vuetify
                "rgba(100, 255, 100, 1)", // Node
                "rgba(255, 159, 64, 1)", // Firebase
                "rgba(100, 255, 100, 1)", // Mongo
                "rgba(75, 192, 192, 1)" // Nuxt
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  max: 100,
                  callback: (value, index, values) => {
                    return `${value}%`;
                  }
                }
              }
            ]
          }
        }
      });
    }
  }
};
</script>
