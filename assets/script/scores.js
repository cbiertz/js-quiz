function recordHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // create list items
      var liTag = document.createElement("li");
      liTag.textContent = score.name + " - " + score.score;
  
      // show on the page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  recordHighscores();