const lvls = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};

let chooseP = document.querySelectorAll(".chooseBox p");
let defultLevelName = "Normal";
let defultLevelSeconds = lvls[defultLevelName];

if (defultLevelName === "Normal") {
  words = [
    "Python",
    "Task",
    "Test",
    "Scala",
    "Country",
    "Testing",
    "Youtube",
    "LinkedIn",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Paradign",
    "Styling",
    "Cascade",
    "Coding",
    "Working",
    "Runner",
    "Playing",
  ];
} else if (defultLevelName === "Easy") {
  words = [
    "Hello",
    "Rust",
    "Roles",
    "Funny",
    "Code",
    "Town",
    "Python",
    "Task",
    "Test",
    "Scala",
    "Country",
    "Testing",
    "Youtube",
    "LinkedIn",
  ];
} else if (defultLevelName === "Hard") {
  words = [
    "Programming",
    "JavaScript",
    "Destructruing",
    "Documentatioin",
    "Dependencies",
    "Testing",
    "Youtube",
    "LinkedIn",
    "Twitter",
    "Github",
    "Internet",
    "Paradign",
    "Styling",
    "Cascade",
    "Coding",
    "Leetcode",
    "Internet",
    "Paradign",
    "Styling",
    "Cascade",
    "Coding",
    "Working",
  ];
}

let startBtn = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .typingTime");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let gameInput = document.querySelector(".gameInput");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let control = document.querySelector(".gameContainer .control");
let GameSection = document.querySelector(".game");

lvlNameSpan.textContent = defultLevelName;
secondsSpan.textContent = defultLevelSeconds;
timeLeftSpan.textContent = defultLevelSeconds;
scoreTotal.textContent = words.length;
document.querySelector(".instruc li span.num").textContent = words.length;
document.querySelector(".instruc li span.time").textContent =
  defultLevelSeconds;
document.querySelector(".instruc li span.def").textContent = defultLevelName;

chooseP.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    chooseP.forEach((p) => {
      p.classList.remove("choose");
    });
    e.currentTarget.classList.add("choose");
    if (e.currentTarget.classList.contains("choose")) {
      defultLevelName = e.target.textContent;
      defultLevelSeconds = lvls[defultLevelName];
      lvlNameSpan.textContent = defultLevelName;
      secondsSpan.textContent = defultLevelSeconds;
      timeLeftSpan.textContent = defultLevelSeconds;
      scoreTotal.textContent = words.length;
      if (defultLevelName === "Normal") {
        words = [
          "Python",
          "Task",
          "Test",
          "Scala",
          "Country",
          "Testing",
          "Youtube",
          "LinkedIn",
          "Twitter",
          "Github",
          "Leetcode",
          "Internet",
          "Paradign",
          "Styling",
          "Cascade",
          "Coding",
          "Working",
          "Runner",
          "Playing",
        ];
      } else if (defultLevelName === "Easy") {
        words = [
          "Hello",
          "Rust",
          "Roles",
          "Funny",
          "Code",
          "Town",
          "Python",
          "Task",
          "Test",
          "Scala",
          "Country",
          "Testing",
          "Youtube",
          "LinkedIn",
        ];
      } else if (defultLevelName === "Hard") {
        words = [
          "Programming",
          "JavaScript",
          "Destructruing",
          "Documentatioin",
          "Dependencies",
          "Testing",
          "Youtube",
          "LinkedIn",
          "Twitter",
          "Github",
          "Internet",
          "Paradign",
          "Styling",
          "Cascade",
          "Coding",
          "Leetcode",
          "Internet",
          "Paradign",
          "Styling",
          "Cascade",
          "Coding",
          "Working",
        ];
      }
      lvlNameSpan.textContent = defultLevelName;
      secondsSpan.textContent = defultLevelSeconds;
      timeLeftSpan.textContent = defultLevelSeconds;
      scoreTotal.textContent = words.length;
      document.querySelector(".instruc li span.num").textContent = words.length;
      document.querySelector(".instruc li span.time").textContent =
        defultLevelSeconds;
      document.querySelector(".instruc li span.def").textContent =
        defultLevelName;
    }
  });
});

if (localStorage.getItem("scoreDate") && localStorage.getItem("score")) {
  let score = document.createElement("div");
  score.className = "scoreGet";
  score.appendChild(
    document.createTextNode(
      `Your Last Score Is ( ${localStorage.getItem(
        "score"
      )} ) In ( ${localStorage.getItem("scoreDate").slice(0, -40)} )`
    )
  );
  control.appendChild(score);
}

startBtn.onclick = function () {
  scoreGot.textContent = 0;
  if (defultLevelName === "Normal") {
    words = [
      "Python",
      "Task",
      "Test",
      "Scala",
      "Country",
      "Testing",
      "Youtube",
      "LinkedIn",
      "Twitter",
      "Github",
      "Leetcode",
      "Internet",
      "Paradign",
      "Styling",
      "Cascade",
      "Coding",
      "Working",
      "Runner",
      "Playing",
    ];
  } else if (defultLevelName === "Easy") {
    words = [
      "Hello",
      "Rust",
      "Roles",
      "Funny",
      "Code",
      "Town",
      "Python",
      "Task",
      "Test",
      "Scala",
      "Country",
      "Testing",
      "Youtube",
      "LinkedIn",
    ];
  } else if (defultLevelName === "Hard") {
    words = [
      "Programming",
      "JavaScript",
      "Destructruing",
      "Documentatioin",
      "Dependencies",
      "Testing",
      "Youtube",
      "LinkedIn",
      "Twitter",
      "Github",
      "Internet",
      "Paradign",
      "Styling",
      "Cascade",
      "Coding",
      "Leetcode",
      "Internet",
      "Paradign",
      "Styling",
      "Cascade",
      "Coding",
      "Working",
    ];
  }
  startBtn.style.display = "none";
  document.querySelector(".chooseBox").style.display = "none";
  document.querySelector(".instruc").style.display = "none";
  finishMessage.textContent = "";
  gameInput.value = "";
  gameInput.focus();
  chooseRanWord();
};

gameInput.onpaste = function () {
  return false;
};

let startScore = 0;

function countDown() {
  if (startScore === 0) {
    timeLeftSpan.textContent = defultLevelSeconds + 3;
  } else {
    timeLeftSpan.textContent = defultLevelSeconds;
  }
  let counter = setInterval(() => {
    timeLeftSpan.textContent--;
    if (timeLeftSpan.textContent == 0) {
      clearInterval(counter);
      if (
        gameInput.value.toLowerCase() ===
        theWord.textContent.toLocaleLowerCase()
      ) {
        if (scoreGot.textContent == scoreTotal.textContent - 1) {
          let div = document.createElement("div");
          div.className = "good";
          div.textContent = "You Win";
          finishMessage.appendChild(div);
          scoreGot.textContent++;
          localStorage.setItem("score", scoreGot.textContent);
          localStorage.setItem("scoreDate", new Date());
          startBtn.style.display = "block";
          theWord.style.display = "none";
          upcomingWords.textContent = "Words Will Show Here";
          document.querySelector(".chooseBox").style.display = "flex";
          document.querySelector(".instruc").style.display = "block";
        } else {
          scoreGot.textContent++;
          startScore++;
          chooseRanWord();
        }
      } else {
        let div = document.createElement("div");
        div.className = "bad";
        div.textContent = "Game Over";
        finishMessage.appendChild(div);
        theWord.textContent = "";
        localStorage.setItem("score", scoreGot.textContent);
        localStorage.setItem("scoreDate", new Date());
        startBtn.style.display = "block";
        document.querySelector(".chooseBox").style.display = "flex";
        document.querySelector(".instruc").style.display = "block";
      }
    }
  }, 1000);
}

function chooseRanWord() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  theWord.textContent = randomWord;
  theWord.style.display = "block";
  let wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex, 1);
  removeWordsAndAdd();
}

function removeWordsAndAdd() {
  upcomingWords.textContent = "";
  gameInput.value = "";
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(words[i]));
    upcomingWords.appendChild(div);
  }
  countDown();
}
