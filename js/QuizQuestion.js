function checkAnswer(userAnswer,button, questioncontainer) {
    const feedbackElement = questioncontainer.querySelector(".feedback");
    const gapc = questioncontainer.querySelector('.gapcount');
    let point = questioncontainer.querySelector('.point');
    const answerButtons = questioncontainer.querySelectorAll(".answerbutton");

    let pointss = 1;
    let gapCount = 0;
    let currentscore = 0;
  
        if (userAnswer) {
            // If the user's answer is correct
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
            // If the user's answer is wrong
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
    progress += 6; // Increase by 10% for each question
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressBar').style.backgroundColor ='green';
    document.getElementById('progressBar').style.borderRadius='15px';
    // Show the feedback
    feedbackElement.style.display = "block";
    // Disable the answer buttons after checking
    document.getElementById('totalScore').textContent = score;
    answerButtons.forEach(answerButton => {
        answerButton.style.display = "none";

    });
  

}
// Attach the checkAnswer function to each answer button
// const answerButtons = document.querySelectorAll(".answerbutton");
// answerButtons.forEach(answerButton => {
//     answerButton.addEventListener('click', () => {
//         checkAnswer(answerButton, answerButton.parentNode.parentNode);
//     });
// });