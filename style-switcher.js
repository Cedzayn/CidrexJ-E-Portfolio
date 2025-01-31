/* ======== Toggle Style Switcher ======= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ======= Theme Color Selection ======= */
const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled'); // Enable the selected stylesheet
    } else {
      style.setAttribute('disabled', 'true'); // Disable all other stylesheets
    }
  });
}

/* ======= Dark and Light Mode Colors ======= */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark"); // Toggle dark mode class for smooth transition
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

/* ======= Portfolio Item Flip Effect ======= */
document.querySelectorAll('.portfolio-item').forEach(function(item) {
  item.addEventListener('click', function() {
      const inner = this.querySelector('.portfolio-item-inner');
      inner.classList.toggle('flipped'); // Toggle the "flipped" class on the inner element
  });
});

/* ======= Login Card Flip Effect ======= */
document.querySelectorAll('.login-card').forEach(function(card) {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped'); // Toggle the flipped class on the entire login card
  });
});

    document.querySelectorAll(".nav li a").forEach(item => {
        item.addEventListener("click", function() {
            document.querySelectorAll(".nav li a").forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
      const navLinks = document.querySelectorAll(".nav a");
      const sections = document.querySelectorAll("section");
  
      // Click event for changing active class
      navLinks.forEach(link => {
          link.addEventListener("click", function () {
              navLinks.forEach(nav => nav.classList.remove("active"));
              this.classList.add("active");
          });
      });
  
      // Scroll event for updating active class
      window.addEventListener("scroll", function () {
          let current = "";
          
          sections.forEach(section => {
              const sectionTop = section.offsetTop - 50;
              const sectionHeight = section.clientHeight;
              if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                  current = section.getAttribute("id");
              }
          });
  
          navLinks.forEach(link => {
              link.classList.remove("active");
              if (link.getAttribute("href").substring(1) === current) {
                  link.classList.add("active");
              }
          });
      });
  });

  AOS.init();
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".animate", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
          trigger: ".animate",
          start: "top 80%",
          end: "top 50%",
          scrub: true
      }
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        let target = document.querySelector(this.getAttribute("href"));

        gsap.to(window, {
            duration: 1,  // Adjust speed
            scrollTo: target, 
            ease: "power2.inOut" // Smooth easing effect
        });
    });
});

document.querySelector(".day-night").addEventListener("click", function() {
  this.classList.toggle("active");

  // Optional: Add logic to switch theme (dark mode)
  document.body.classList.toggle("dark-theme");
});

document.querySelector(".day-night").addEventListener("click", function() {
  this.classList.toggle("fade-out"); // Add fade-out animation

  // Toggle dark mode on body
  document.body.classList.toggle("dark");

  // Optional: Restore fade-in after a delay (if needed)
  setTimeout(() => {
      this.classList.toggle("fade-out");
  }, 500);
});