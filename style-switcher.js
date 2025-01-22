/* ======== Toggle Style Switcher ======= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide-style - swticher on scroll
window,addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open"))
    {
     document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ======= theme colors ======= */
// Select all alternate stylesheets
const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute('title')) {
      // Enable the selected stylesheet
      style.removeAttribute('disabled');
    } else {
      // Disable all other stylesheets
      style.setAttribute('disabled', 'true');
    }
  });
}


  
/* ======= Dark and Light Mode Colors ======= */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    })

window.addEventListener("load", () =>{
    if (document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else 
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})


