// JavaScript for page navigation
var currentPage = 0; // Initialize with the first page
var totalPages = 31; // Total number of pages

function navigatePage(direction) {
    currentPage += direction;

    // Ensure currentPage stays within the bounds of your pages
    if (currentPage < 1) {
        currentPage = 0;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    // Update the page number display
    document.getElementById("pageNumber").textContent =   currentPage + "/30";

    // Show/hide pages based on the current page
    var pageContents = document.querySelectorAll(".page-content");
    for (var i = 0; i < pageContents.length; i++) {
        var page = pageContents[i].getAttribute("data-page");
        if (page == currentPage) {
            pageContents[i].style.display = "block";
        } else {
            pageContents[i].style.display = "none";
        }
    }
}

// Call navigatePage initially to display the first page
navigatePage(0);

let submenue3 = document.getElementById("sub-menue3");
let submenue1 = document.getElementById("sub-menue1");
let submenue2 = document.getElementById("sub-menue2");

  function showSubmenue1() {
    if (submenue1.style.display === "block") {
        submenue1.style.display = "none";
    } else {
        submenue1.style.display = "block";
        submenue2.style.display = "none";
        submenue3.style.display = "none";
    }
  }
  function showSubmenue2() {
    if (submenue2.style.display === "block") {
        submenue2.style.display = "none";
    } else {
        submenue2.style.display = "block";
        submenue1.style.display = "none";
        submenue3.style.display = "none";
        
    }
  }
  function showSubmenue3() {
    if (submenue3.style.display === "block") {
        submenue3.style.display = "none";
    } else {
        submenue3.style.display = "block";
        submenue1.style.display = "none";
        submenue2.style.display = "none";
    }
  }
  // function showSubmenue() {
  //   for (let i = 1; i < 4; i++) {
  //     let submenue = document.getElementById("sub-menue"+i);
  //     for (let j = 1; j < 4; j++) {
  //     if (j!=i) {
  //         submenue.style.display = "none";
  //     }
  //     else {
  //         submenue.style.display = "block";
  //     }
  //     }
  //     }
  //   }