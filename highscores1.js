const highScoresList = document.getElementById("highScore");


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
      return   `<li class="high-score-name">${score.score}</li>`;
 })
  .join("");

