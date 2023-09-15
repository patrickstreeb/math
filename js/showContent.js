function showContent(contentId) {
    const contentSections = document.querySelectorAll('.content-section');
    for (const section of contentSections) {
        section.style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'block';
  }

  document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const sidebarItems = document.querySelectorAll(".sidebar-item");
  
    sidebarItems.forEach(item => {
      item.addEventListener("click", () => {
        // Show the content area on the first click
        if (!content.classList.contains("content-shown")) {
          content.style.display = "block";
          content.classList.add("content-shown");
        }
  
        // Toggle active class to show/hide sub-toolbar
        sidebarItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  });