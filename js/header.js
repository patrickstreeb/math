window.addEventListener('load',function(){
        const totalPages = 30;
        let currentPage = 1;
        const progressBar = document.getElementById("progressBar");
        const nextButton = document.getElementById("forward-btn");
        const prevButton = document.getElementById("backward-btn");
        const pages = document.querySelectorAll('.page-content');
        
        function updateToolbar() {
            
            const percentage = (currentPage / totalPages) * 100;
            progressBar.style.width = (percentage/3.6) + "%";
            progressBar.innerHTML = Math.round(percentage) + "%";
            showPage(currentPage - 1);
        }

        nextButton.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                updateToolbar();
            }
        });

        prevButton.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                updateToolbar();
            }
        });

        function showPage(index) {
            
            pages.forEach((page, i) => {
                page.style.display = i === index ? 'block' : 'none';
            });
        }

        showPage(currentPage - 1);
        updateToolbar();
    });

    /* a function for a timer starting with time 0: */
     let hours = 0;   
    let minutes = 0;
    let seconds = 0;

        // Update the timer every second
        let timerInterval = setInterval(updateTimer, 1000);

        function updateTimer() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }   
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }


            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');
            const timerText = `${formattedMinutes}:${formattedSeconds}`;
            document.getElementById('countup-timer').innerHTML = timerText;
        } 