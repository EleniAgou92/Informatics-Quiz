

const highScoresList = document.getElementById("highScoreName");


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score-name">${score.name}</li>`
   
  })
  .join("");

