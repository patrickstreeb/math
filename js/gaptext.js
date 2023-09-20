const timeLimitSeconds = 120 * 60;
let totalTimeElapsed = 0;

// Start a timer to update time elapsed
const timerInterval = setInterval(() => {
  totalTimeElapsed += 1;
  updateTimeElapsed();

  // Check if the time limit has been reached
  if (totalTimeElapsed >= timeLimitSeconds) {
    clearInterval(timerInterval);

    // Disable all question elements
    document
      .querySelectorAll(".quiz-container .answer-button")
      .forEach((button) => {
        button.disabled = true;
      });
  }
}, 1000);

function updateTimeElapsed() {
  const hours = Math.floor(totalTimeElapsed / 3600);
  const minutes = Math.floor((totalTimeElapsed % 3600) / 60);
  const seconds = totalTimeElapsed % 60;
  const timeElapsedDisplay = `${hours}h ${minutes}m ${seconds}s`;
  document.getElementById("totalTime").textContent = timeElapsedDisplay;
}
const totalQuestions = 20;

document.addEventListener("DOMContentLoaded", function () {
  const quizContainers = document.querySelectorAll(".quiz-container");
  let gapCount = 0;
  quizContainers.forEach((container) => {
    const gaps = container.querySelectorAll(".gap");
    const answerButtons = container.querySelectorAll(".answer-buttons .button");
    const checkAnswerButton = container.querySelector(".check-answer");
    const feedback = container.querySelector(".feedback");
    const gapc = container.querySelector(".gapcount");
    let point = container.querySelector(".point").innerHTML;
    const progressBar = document.getElementById("progressBar");
    const progressLabel = document.getElementById("progressLabel");

    checkAnswerButton.addEventListener("click", () => {
      gaps.forEach((gap) => {
        let userAnswer = gap.textContent;
        let correctAnswer = gap.getAttribute("data-answer");
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, correctAnswer]); // Typeset the MathJax code
        console.log("Correct Answer:", correctAnswer);
        console.log("User Answer:", userAnswer);

        if (userAnswer === correctAnswer) {
          gap.classList.remove("wrong-gap");
          gap.classList.add("correct-gap");
          score = score + parseInt(point);
          const percentage = (score / totalQuestions) * 100;
          progressBar.style.width = percentage + "%";
          progressLabel.textContent = "Progress" + percentage.toFixed(2) + "%";
        } else {
          gap.classList.remove("correct-gap");
          gap.classList.add("wrong-gap");
        }
        checkAnswerButton.style.display = "none";
      });

      const allCorrect = Array.from(gaps).every((gap) =>
        gap.classList.contains("correct-gap")
      );
      feedback.style.display = "block";
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, feedback]);
      answerButtons.forEach((answerButton) => {
        answerButton.style.display = "none";
      });

      document.getElementById("totalScore").textContent = score;
      if (allCorrect) {
        feedback.textContent =
          "All answers are correct! " + feedback.textContent;
        feedback.style.backgroundColor = "rgb(204, 239, 204)";
        feedback.style.border = "1px solid green";
      } else {
        feedback.textContent =
          "Some answers are incorrect. " + feedback.textContent;
        feedback.style.backgroundColor = "rgb(247, 172, 172)";
        feedback.style.border = "1px solid red";
      }
    });
    checkAnswerButton.addEventListener("click", () => {
      gaps.forEach((gap) => {
        gapCount = gapCount + parseInt(point);
        gapc.textContent = gapCount + "Points";
      });
    });

    answerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const gaps = container.querySelectorAll(".gap");
        const selectedAnswer = button.getAttribute("data-answer");
        console.log("button answer:", selectedAnswer);
        const selectedGap = Array.from(gaps).find(
          (gap) => gap.textContent.trim() === ""
        );
        if (selectedGap) {
          selectedGap.textContent = selectedAnswer;
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, selectedGap]);

          selectedGap.style.padding = "0px";
        }
      });
    });
  });
});
