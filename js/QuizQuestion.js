/* 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>MathJax example</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <title>Yes/No Quiz</title>
    <style>
        .question {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .answerbutton {
            cursor: pointer;
            font-size: 17px;
            padding: 10px 20px;
            margin: 5px;
            border: 1px solid #b8b7b7;
            display: inline-block;
            min-width: 50px;
            min-height: 18px;
            text-align: center;
            border-radius: 5px;
            margin-top: 20px;
        }

        .answerbutton.correct {
            background-color: rgb(204, 239, 204);
            color: rgb(0, 0, 0);
        }

        .answerbutton.wrong {
            background-color: rgb(247, 172, 172);
            color: rgb(0, 0, 0);
        }

        .answerbutton:hover {
            background-color: #f0eeee;
        }

        .answerbutton::after {
            background-color: #dfdede;
        }

        .feedback {
            margin-top: 10px;
            display: none; 
            background-color: rgb(247, 247, 247);
            padding: 20px;
            border-radius: 5px;
        }

        .correct {
            color: green;
        }

        .wrong {
            color: red;
        }

        .questioncontainer {
            border: solid 1px;
            padding: 20px;
            border-radius: 5px;
            border-color: #c3c2c2;
            max-width: 600px;
        }
        .topline {
            margin-bottom: 30px;
            font-size: larger;
        }
    </style>
</head>





    
    _______________________________________Multiple Choice_____________________________________
      <div class="questioncontainer" data-page="1">
            <div class=topline> <em>Exercise</em>      <span class="pointsandtimer"> <em>1 point </em>   </span> </div>
            <div class="question">  What?   </div>
            <div class="answers">
                <div class="answerbutton" onclick="checkAnswer(false, this, this.parentNode.parentNode)">i </div>
                <div class="answerbutton" onclick="checkAnswer(false, this, this.parentNode.parentNode)"> o </div>
                <div class="answerbutton" onclick="checkAnswer(false, this, this.parentNode.parentNode)">p  </div>
                <div class="answerbutton" onclick="checkAnswer(true, this, this.parentNode.parentNode)">n  </div>
            </div>
            <div class="feedback"> Maybe </div>
        </div>
    

    _______________________________________YES NO QUESTION_____________________________________

       <div class="questioncontainer" data-page="2">
            <div class=topline> <em>Question</em>      <span class="pointsandtimer"> <em>1 point </em>   </span> </div>
            <div class="question"> Hello  </div>
            <div class="answerbutton" onclick="checkAnswer(true, this, this.parentNode)">Yes</div>
            <div class="answerbutton" onclick="checkAnswer(false, this, this.parentNode)">No</div>
            <div class="feedback">  No  </div>
        </div> 

        <div class="questioncontainer" data-page="3">
            <div class=topline> <em>Question</em>      <span class="pointsandtimer"> <em>1 point </em>   </span> </div>
            <div class="question"> Hello  </div>
            <div class="answerbutton" onclick="checkAnswer(true, this, this.parentNode)">Yes</div>
            <div class="answerbutton" onclick="checkAnswer(false, this, this.parentNode)">No</div>
            <div class="answerbutton" onclick="checkAnswer(false, this, this.parentNode)">No</div>
            <div class="answerbutton" onclick="checkAnswer(false, this, this.parentNode)">No</div>
            <div class="feedback">  No  </div>
        </div> */

        
        function checkAnswer(userAnswer, button, questioncontainer) {
            // Get the feedback element for the specific question
            const point = questioncontainer.querySelector('.point').innerHTML;;
            const feedbackElement = questioncontainer.querySelector(".feedback");
            
            
                if (userAnswer) {
                    // If the user's answer is correct
                    const correctImg = new Image()
            correctImg.src = '../../pictures/general/checkmark.png'; 
            correctImg.style.width = '30px';
            // Path to the correct feedback image
            feedbackElement.insertBefore(correctImg, feedbackElement.firstChild);
            feedbackElement.style.backgroundColor = "rgb(204, 239, 204)";
            feedbackElement.style.border = "1px solid darkgreen";
            score= score + parseInt(point);
                } else {
                    // If the user's answer is wrong
                    const wrongImg = new Image();
            wrongImg.src = '../../pictures/general/wrong-sign.png'; // Path to the wrong feedback image
            wrongImg.style.width = '30px';
            feedbackElement.insertBefore(wrongImg, feedbackElement.firstChild);
            feedbackElement.style.backgroundColor = "rgb(247, 172, 172)";
            feedbackElement.style.border = "1px solid darkred";
                }
                // Show the feedback
                feedbackElement.style.display = "block";
                // Disable the answer buttons after checking
                document.getElementById('totalScore').textContent = score;
                const answerButtons = questioncontainer.querySelectorAll(".answerbutton");
                answerButtons.forEach(answerButton => {
                    answerButton.style.display = "none";
                });
        }
