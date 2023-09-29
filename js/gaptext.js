const timeLimitSeconds = 120 * 60;
let totalTimeElapsed = 0;

// Start a timer to update time elapsed
 timerInterval = setInterval(() => {
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
let progress = 0;
document.addEventListener("DOMContentLoaded", function () {
    const quizContainers = document.querySelectorAll('.quiz-container');

    quizContainers.forEach(container => {
        const gaps = container.querySelectorAll('.gap');
        const answerButtons = container.querySelectorAll('.answer-buttons .button');
        const checkAnswerButton = container.querySelector('.check-answer');
        const feedback = container.querySelector('.feedback');
        const gapc = container.querySelector('.gapcount');
        // const progressBar = document.getElementById('progressBar');
        // const progressLabel = document.getElementById('progressLabel');
        const deleteLastGapButton = document.getElementById('delete');
        let point = container.querySelector('.point');
        let pointss = 1;


        checkAnswerButton.addEventListener('click', () => {
            let gapCount = 0;
            let currentscore = 0;
            gaps.forEach(gap => {

                let userAnswer = gap.textContent.trim();
                let correctAnswer = gap.getAttribute('data-answer');

                if (userAnswer === correctAnswer) {
                    gap.classList.remove('wrong-gap');
                    gap.classList.add('correct-gap');
                    score = score + pointss;
                    currentscore = currentscore + pointss;
                } else {
                    gap.classList.remove('correct-gap');
                    gap.classList.add('wrong-gap');
                }

                checkAnswerButton.style.display = "none";
                gapCount = gapCount + pointss;

            });
            progress += 8; // Increase by 10% for each question
            document.getElementById('progressBar').style.width = `${progress}%`;
            point.textContent = currentscore + "/";
            if (gapCount > 1) {
                gapc.textContent = gapCount + " Points";
            }
            else {
                gapc.textContent = gapCount + " Point";
            }
            //deleteLastGapButton.style.display = "none";
            // const totalpoint = require('script.js');
            // var percentage=(gapCount/totalpoint)*100;
            // var totalpercentage = 0;
            // totalpercentage = totalpercentage + percentage;
            // progressBar.style.width = totalpercentage + '%';
            // console.log(totalpercentage);

            const allCorrect = Array.from(gaps).every(gap => gap.classList.contains('correct-gap'));
            document.getElementById('totalScore').textContent = score;
            feedback.style.display = "block";
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, feedback]);
            answerButtons.forEach(answerButton => {
                answerButton.style.display = "none";

            });

            if (allCorrect) {

                feedback.textContent = 'All answers are correct! ' + feedback.textContent;
                feedback.style.backgroundColor = "rgb(204, 239, 204)";
                feedback.style.border = "1px solid darkgreen";


            } else {

                feedback.textContent = 'Some answers are incorrect. ' + feedback.textContent;
                feedback.style.backgroundColor = "rgb(247, 172, 172)";
                feedback.style.border = "1px solid darkred";
            }

        });

        answerButtons.forEach(button => {
            button.addEventListener('click', () => {
                const gaps = container.querySelectorAll('.gap');
                const selectedAnswer = button.getAttribute('data-answer');
                const selectedGap = Array.from(gaps).find(gap => gap.textContent.trim() === '');
                console.log(selectedGap);
                if (selectedGap) {
                    selectedGap.textContent = selectedAnswer;

                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, selectedGap]);

                    selectedGap.style.padding = "0px";

                }

            });

            // deleteLastGapButton.addEventListener('click', () => {
            //     const gaps = container.querySelectorAll('.gap');
            //     const lastFilledGap = Array.from(gaps).reverse().find(gap => gap.textContent.trim() !== '');
            //     if (lastFilledGap) {
            //         lastFilledGap.textContent = '';
            //         lastFilledGap.style.padding = "20px";
            //         lastFilledGap.style.paddingBottom = "0px";
            //     }
            // });

        });

    });
});