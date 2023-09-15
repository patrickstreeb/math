/*
<head>
    <style>
        #toolbar {
            background-color: #333;
            color: white;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #progress {
            flex-grow: 1;
            margin: 0 20px;
        }

        #progressbar {
            height: 20px;
            background-color: #00a0d6;
            width: 0%;
        }

        button {
            margin-top: 20px;
        }
        
        .page {
            display: none;
        }
    </style>
</head>
<body>
    <div id="toolbar">
    <div > sets </div>div>
        <div id="progress">
            <div id="progressbar"></div>
        </div>
    </div>

    <div id="content">
        <div class="page" id="page1">
            <h1>Page 1</h1>
            <p>This is the content of Page 1.</p>
        </div>

        <div class="page" id="page2">
            <h1>Page 2</h1>
            <p>This is the content of Page 2.</p>
        </div>

        <div class="page" id="page3">
            <h1>Page 3</h1>
            <p>This is the content of Page 3.</p>
        </div>

        <div class="page" id="page4">
            <h1>Page 4</h1>
            <p>This is the content of Page 4.</p>
        </div>
    </div>

    <footer>
        <button id="prevButton">Previous</button>
        <button id="nextButton">Next</button>
    </footer>     */



        window.addEventListener('load',function(){
        const totalPages = 30;
        let currentPage = 1;
        const progressBar = document.getElementById("progressbar");
        const nextButton = document.getElementById("forward-btn");
        const prevButton = document.getElementById("backward-btn");

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
        const timerInterval = setInterval(updateTimer, 1000);

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
   


   