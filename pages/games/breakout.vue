<template>
  <div>
    <h1>Breakout</h1>
    <canvas id="myCanvas" width="480" height="320"></canvas>
    <v-btn @click="draw">Draw</v-btn>
  </div>
</template>

<script>
let canvas = {},
  ctx = null,
  interval = null,
  x = null,
  y = null,
  dx = 2,
  dy = -2,
  ballRadius = 10,
  paddleHeight = 10,
  paddleWidth = 75,
  paddleX = null,
  rightPressed = false,
  leftPressed = false,
  brickRowCount = 3,
  brickColumnCount = 5,
  brickWidth = 75,
  brickHeight = 20,
  brickPadding = 10,
  brickOffsetTop = 30,
  brickOffsetLeft = 30,
  bricks = [],
  score = 0,
  lives = 3;

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

export default {
  data() {
    return {
      x: canvas.width / 2,
      y: canvas.height - 30
    };
  },
  mounted() {
    // Canvas
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // Canvas Properties
    x = canvas.width / 2;
    y = canvas.height - 30;
    paddleX = (canvas.width - paddleWidth) / 2;

    // Event Listeners
    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
    document.addEventListener("mousemove", this.mouseMoveHandler, false);

    this.draw();
  },
  methods: {
    drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = this.$vuetify.theme.themes.dark.primary;
      ctx.fill();
      ctx.closePath();
    },
    draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.drawBricks();
      this.drawBall();
      this.drawPaddle();
      this.drawScore();
      this.drawLives();
      this.collisionDetection();

      // Change Direction
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx = -dx;
      if (y + dy < ballRadius) dy = -dy;
      else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) dy = -dy;
        else lives--;
        if (!lives) {
          alert("GAME OVER");
          document.location.reload();
          // clearInterval(interval); // Needed for Chrome to end game
        } else {
          x = canvas.width / 2;
          y = canvas.height - 30;
          dx = 2;
          dy = -2;
          paddleX = (canvas.width - paddleWidth) / 2;
        }
      }

      // Paddle Movement
      if (rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width)
          paddleX = canvas.width - paddleWidth;
      } else if (leftPressed) {
        paddleX -= 7;
        if (paddleX < 0) paddleX = 0;
      }

      // Ball Movement
      x += dx;
      y += dy;

      requestAnimationFrame(this.draw);
    },
    drawPaddle() {
      ctx.beginPath();
      ctx.rect(
        paddleX,
        canvas.height - paddleHeight,
        paddleWidth,
        paddleHeight
      );
      ctx.fillStyle = this.$vuetify.theme.themes.dark.primary;
      ctx.fill();
      ctx.closePath();
    },
    keyDownHandler(e) {
      if (e.key == "Right" || e.key == "ArrowRight") rightPressed = true;
      else if (e.key == "Left" || e.key == "ArrowLeft") leftPressed = true;
    },
    keyUpHandler(e) {
      if (e.key == "Right" || e.key == "ArrowRight") rightPressed = false;
      else if (e.key == "Left" || e.key == "ArrowLeft") leftPressed = false;
    },
    // mouseMoveHandler(e) {
    //   let relativeX = e.clientX - canvas.offsetLeft;
    //   if (relativeX > 0 && relativeX < canvas.width)
    //     paddleX = relativeX - paddleWidth / 2;
    // },
    drawBricks() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status == 1) {
            let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = this.$vuetify.theme.themes.dark.primary;
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    },
    collisionDetection() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          let b = bricks[c][r];
          if (b.status == 1) {
            if (
              x > b.x &&
              x < b.x + brickWidth &&
              y > b.y &&
              y < b.y + brickHeight
            ) {
              dy = -dy;
              b.status = 0;
              score++;
              if (score == brickRowCount * brickColumnCount) {
                alert("YOU WIN, CONGRATULATIONS!");
                document.location.reload();
                clearInterval(interval); // Needed for Chrome to end game
              }
            }
          }
        }
      }
    },
    drawScore() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: " + score, 8, 20);
    },
    drawLives() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
    },
    test() {
      console.log("test");
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
canvas {
  background: #eee;
  display: block;
  margin: 0 auto;
}
</style>