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

// fade in animation

const content = document.querySelectorAll(".fadeInUp");

document.addEventListener("scroll", function () {
  content.forEach((fadeInUp) => {
    if (isInView(fadeInUp)) {
      fadeInUp.classList.add("fadeInUp--visible");
    }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
      (window.innerHeight - 150 || documentElement.clientHeight - 150)
  );
}
