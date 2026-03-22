(function () {
  const ROUND_LEN = 10;
  const CORRECT_DELAY_MS = 650;

  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const btnStart = document.getElementById("btn-start");
  const portraitFrame = document.getElementById("portrait-frame");
  const portraitImg = document.getElementById("portrait-img");
  const answerInput = document.getElementById("answer");
  const btnCheck = document.getElementById("btn-check");
  const progressEl = document.getElementById("progress");

  const items = window.QUIZ_ITEMS || [];
  let round = [];
  let index = 0;
  let locked = false;

  function normalize(s) {
    if (!s) return "";
    let t = String(s).trim().replace(/\s+/g, " ");
    t = t.replace(/[\u2013\u2014\u2212−]/g, "-");
    t = t.replace(/\(\s*(\d+)\s*-\s*(\d+)\s*\)/g, "($1-$2)");
    return t;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRound() {
    if (items.length === 0) return [];
    const copy = shuffle(items.map((_, i) => i));
    return copy.slice(0, Math.min(ROUND_LEN, copy.length)).map((i) => items[i]);
  }

  function layoutPortrait(item) {
    const rows = item.rows;
    const row = item.row;

    function apply() {
      const h = portraitImg.offsetHeight;
      if (!h) return;
      const rowH = h / rows;
      const settings = window.QUIZ_SETTINGS || {};
      const fraction = typeof item.portraitFraction === "number" ? item.portraitFraction : settings.portraitRowFraction;
      const f = Math.min(1, Math.max(0.35, typeof fraction === "number" ? fraction : 0.7));
      portraitFrame.style.height = rowH * f + "px";
      portraitImg.style.transform = "translateY(" + -row * rowH + "px)";
    }

    portraitImg.onload = function () {
      requestAnimationFrame(function () {
        apply();
        requestAnimationFrame(apply);
      });
    };
    if (portraitImg.complete && portraitImg.naturalHeight) {
      requestAnimationFrame(function () {
        apply();
        requestAnimationFrame(apply);
      });
    }
  }

  function showStart() {
    startScreen.classList.add("is-active");
    quizScreen.classList.remove("is-active");
    answerInput.value = "";
    resetInputStyle();
    round = [];
    index = 0;
    locked = false;
  }

  function showQuiz() {
    startScreen.classList.remove("is-active");
    quizScreen.classList.add("is-active");
  }

  function resetInputStyle() {
    answerInput.classList.remove("ok", "bad");
  }

  function setInputOk() {
    answerInput.classList.remove("bad");
    answerInput.classList.add("ok");
  }

  function setInputBad() {
    answerInput.classList.remove("ok");
    answerInput.classList.add("bad");
  }

  function showCurrent() {
    const item = round[index];
    resetInputStyle();
    answerInput.value = "";
    answerInput.focus();
    progressEl.textContent = index + 1 + " / " + round.length;
    portraitImg.removeAttribute("style");
    portraitFrame.style.height = "";
    portraitFrame.classList.remove("portrait-anim");
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        portraitFrame.classList.add("portrait-anim");
      });
    });
    portraitImg.src = item.src;
    layoutPortrait(item);
  }

  function advanceOrFinish() {
    index += 1;
    if (index >= round.length) {
      showStart();
      return;
    }
    showCurrent();
  }

  function checkAnswer() {
    if (locked || !round.length) return;
    const item = round[index];
    const ok = normalize(answerInput.value) === normalize(item.answer);
    if (ok) {
      setInputOk();
      locked = true;
      window.setTimeout(function () {
        locked = false;
        advanceOrFinish();
      }, CORRECT_DELAY_MS);
    } else {
      setInputBad();
    }
  }

  btnStart.addEventListener("click", function () {
    round = pickRound();
    if (round.length === 0) return;
    index = 0;
    showQuiz();
    showCurrent();
  });

  btnCheck.addEventListener("click", checkAnswer);

  answerInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      checkAnswer();
    }
  });

  answerInput.addEventListener("input", function () {
    if (answerInput.classList.contains("bad")) {
      resetInputStyle();
    }
  });

  window.addEventListener("resize", function () {
    if (quizScreen.classList.contains("is-active") && round[index]) {
      layoutPortrait(round[index]);
    }
  });
})();
