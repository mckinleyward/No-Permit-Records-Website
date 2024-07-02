function toggleMenu() {
    const nav = document.querySelector('.headerNav');
    nav.classList.toggle('show');
}

// Demo button scroll
document.addEventListener("DOMContentLoaded", function() {
    const demoBTN = document.getElementById("submitDemoButton");
    const demoSection = document.getElementById("demoSubmissionSection");
  
    demoBTN.addEventListener("click", function(event) {
      event.preventDefault();
      demoSection.scrollIntoView({ behavior: "smooth" });
    });
});