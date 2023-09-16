// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>math course</title>
//     <meta name="description" content="course description goes here">
//     <link rel="shortcut icon" href="../pictures/general/logo.png" type="image/x-icon">
//     <meta name="keywords" content="math, functions, sets">
//     <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
//     <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
//     <link rel="stylesheet" type="text/css" href="../style.css">
// </head>
// <body>
//     <div class="questioncontainer">
//         <div class=topline> <em>Question</em> <span class="pointsandtimer"> <em>1 point</em> </span> </div>
//         <div class="question">
//             Given is the matrix \[A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}.\] What is the value of \(a_{23}\)?
//         </div>
//         <div class="answers">
//             <input class="input-box" type="text" placeholder="...">
//             <div class="answerbutton" onclick="checkAnswer2(this, this.parentNode.parentNode)">Check Answer</div>
//         </div>
//         <div class="solution">6</div>
//         <div class="feedback">
//             <p class="feedback-text"> The entry in the second row and third column is \(a_{23} = 6\).</p>
//         </div>
//     </div>


        
        function checkAnswer2(button, questioncontainer) {
            // Get the feedback element for the specific question
            const feedbackElement = questioncontainer.querySelector(".feedback");
            const correctAnswer = questioncontainer.querySelector(".solution").innerHTML;
            const userAnswer = questioncontainer.querySelector(".input-box").value;
            const Answers = questioncontainer.querySelector(".answers");
          
            
        if (userAnswer === correctAnswer) {
            const correctImg = new Image()
            correctImg.src = '/.../pictures/general/checkmark.png'; 
            correctImg.style.width = '30px';
            // Path to the correct feedback image
            feedbackElement.insertBefore(correctImg, feedbackElement.firstChild);
            feedbackElement.style.backgroundColor = "rgb(204, 239, 204)";
        } else {
            const wrongImg = new Image();
            wrongImg.src = '/../pictures/general/wrong-sign.png'; // Path to the wrong feedback image
            wrongImg.style.width = '30px';
            feedbackElement.insertBefore(wrongImg, feedbackElement.firstChild);
            feedbackElement.style.backgroundColor = "rgb(247, 172, 172)";
        }

            // Show the feedback
            feedbackElement.style.display = "block";
            Answers.style.display = "none";
        }
