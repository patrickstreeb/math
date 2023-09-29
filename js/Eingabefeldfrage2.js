let score = 0;
function checkAnswer2(button, questioncontainer) {
    // Get the feedback element for the specific question
    const feedbackElement = questioncontainer.querySelector(".feedback");
    const correctAnswer = questioncontainer.querySelector(".solution").innerHTML;
    const userAnswer = questioncontainer.querySelector(".input-box").value;
    const Answers = questioncontainer.querySelector(".answers");
    
    const gapc = questioncontainer.querySelector('.gapcount');
    let point = questioncontainer.querySelector('.point');
    let pointss = 1;
    let gapCount = 0;
    let currentscore = 0;


    if (userAnswer === correctAnswer) {
        const correctImg = new Image()
        correctImg.src = '../../pictures/general/checkmark.png';
        correctImg.style.width = '30px';
        // Path to the correct feedback image
        feedbackElement.insertBefore(correctImg, feedbackElement.firstChild);
        feedbackElement.style.backgroundColor = "rgb(204, 239, 204)";
        feedbackElement.style.border = "1px solid darkgreen";
        score = score + pointss;
        currentscore = currentscore + pointss;
    } else {
        const wrongImg = new Image();
        wrongImg.src = '../../pictures/general/wrong-sign.png'; // Path to the wrong feedback image
        wrongImg.style.width = '30px';
        feedbackElement.insertBefore(wrongImg, feedbackElement.firstChild);
        feedbackElement.style.backgroundColor = "rgb(247, 172, 172)";
        feedbackElement.style.border = "1px solid darkred";
    }
    gapCount = gapCount + pointss;
    point.textContent = currentscore + "/";
    gapc.textContent = gapCount + " Point";
    feedbackElement.style.display = "block";
    Answers.style.display = "none";
    document.getElementById('totalScore').textContent = score;
    progress += 6; // Increase by 10% for each question
    document.getElementById('progressBar').style.width = `${progress}%`;

    // Show the feedback
   
    
    
}