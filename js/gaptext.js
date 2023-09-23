// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Gap Text Quiz</title>
//     <style>
//         /* Your styles here */
//     </style>
// </head>
// <body>
//     <div class="quiz-container">
//         <div class="quiz-content">
//             <!-- Edit the question and gaps here -->
//             <p>Fill in the blanks:</p>
//             <p>The capital of France is <span class="gap" data-answer="Paris"></span>.</p>
//             <p>The largest planet in our solar system is <span class="gap" data-answer="Jupiter"></span>.</p>
//         </div>
//         <div class="answer-buttons">
//             <!-- Edit the answer buttons here -->
//             <button data-answer="Paris">Paris</button>
//             <button data-answer="London">London</button>
//             <button data-answer="Rome">Rome</button>
//             <button data-answer="Jupiter">Jupiter</button>
//             <button data-answer="Mars">Mars</button>
//             <button data-answer="Venus">Venus</button>
//         </div>
//         <button class="check-answer">Check Answer</button>
//         <p class="feedback"></p>
//     </div>

   
    // <div class="quiz-container">
    //     <div class="quiz-content">
    //         <!-- Edit the question and gaps here -->
    //         <p>Fill in the blanks:</p>
    //         <p>The capital of France is <span class="gap" data-answer="Paris"></span>.</p>
    //         <p>The largest planet in our solar system is <span class="gap" data-answer="Jupiter"></span>.</p>
    //     </div>
    //     <div class="answer-buttons">
    //         <!-- Edit the answer buttons here -->
    //         <button data-answer="Paris">Paris</button>
    //         <button data-answer="London">London</button>
    //         <button data-answer="Rome">Rome</button>
    //         <button data-answer="Jupiter">Jupiter</button>
    //         <button data-answer="Mars">Mars</button>
    //         <button data-answer="Venus">Venus</button>
    //     </div>
    //     <button class="check-answer">Check Answer</button>
    //     <p class="feedback"></p>
    // </div>


   
        const quizContainers = document.querySelectorAll('.quiz-container');
let gapCount=0;
        quizContainers.forEach(container => {
            const gaps = container.querySelectorAll('.gap');
            const answerButtons = container.querySelectorAll('.answer-buttons .button');
            const checkAnswerButton = container.querySelector('.check-answer');
            const feedback = container.querySelector('.feedback');
            const gapc = container.querySelector('.gapcount');
            let point = container.querySelector('.point').innerHTML;
           
           
            checkAnswerButton.addEventListener('click', () => {
                gaps.forEach(gap => {
                    let userAnswer = gap.textContent.trim();
                    let correctAnswer = gap.getAttribute('data-answer');
                                      
                    if (userAnswer === correctAnswer) {
                        gap.classList.remove('wrong-gap');
                        gap.classList.add('correct-gap');
                        score = score + parseInt(point);

                    } else {
                        gap.classList.remove('correct-gap');
                        gap.classList.add('wrong-gap');
                    }
                    checkAnswerButton.style.display = "none";
                    gapCount = gapCount + parseInt(point);
                 
                });
                gapc.textContent=gapCount + 'Points';
                const allCorrect = Array.from(gaps).every(gap => gap.classList.contains('correct-gap'));

                
                if (allCorrect) {
                   
                    feedback.textContent = 'All answers are correct! ' + feedback.textContent;
                    feedback.style.backgroundColor = "rgb(204, 239, 204)";
                    feedbackElement.style.border = "1px solid darkgreen";
                    

                } else {
                  
                    feedback.textContent = 'Some answers are incorrect. ' + feedback.textContent;
                    feedback.style.backgroundColor= "rgb(247, 172, 172)";
                    feedbackElement.style.border = "1px solid darkred";
                }
                document.getElementById('totalScore').textContent = score;
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, feedback]);
                feedback.style.display = "block";
                
                answerButtons.forEach(answerButton => {
                    answerButton.style.display = "none";
                    
                });
            });

            
            answerButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const gaps = container.querySelectorAll('.gap');
                    const selectedAnswer = button.getAttribute('data-answer');
                    const selectedGap = Array.from(gaps).find(gap => gap.textContent.trim() === '');
                    if (selectedGap) {
                        selectedGap.textContent = selectedAnswer;
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub,selectedGap]);
                        
                        selectedGap.style.padding = "0px";
                       
                    }
                });

            });
            
            
        });
