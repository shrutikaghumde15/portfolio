// Dark Mode
let btn = document.getElementById("theme-toggle");
btn.onclick = function() {
    document.body.classList.toggle("dark");
};

// Animation Fix
let sections = document.querySelectorAll("section");

function revealSections() {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;

        if (scrollY >= offset) {
            sec.classList.add("show");
        }
    });
}

// IMPORTANT FIX
window.addEventListener("load", revealSections);
window.addEventListener("scroll", revealSections);

// Scroll button
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView();
}

// CV Modal
function openCV() {
    document.getElementById("cvModal").style.display = "block";
}

function closeCV() {
    document.getElementById("cvModal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("cvModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};