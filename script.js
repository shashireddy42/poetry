let currentSlide = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.poem-card');
    const slideWidth = slides[0].offsetWidth + 20; // Width + Margin
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Wrap to last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Wrap to first slide
    }

    const offset = -currentSlide * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
}
// Toggle responsive navigation
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Poem Data
const poems = [
    {
        title: "Consumed or Void: The Duality of Art and Thought",
        content: "Welcome, fellow creatives! I’m Rae Shoemaker. In this piece, I explore how art and thought can consume us, leaving us fulfilled or void."
    },
    {
        title: "Lost and Found: A Journey Through Identity",
        content: "Welcome back. I’m Rae Shoemaker, and today I take you on a journey through the evolving landscapes of identity and self-discovery."
    },
    {
        title: "Oversharing: A Portrait",
        content: "Today’s piece is all about peeling back the layers, embracing vulnerability, and examining what it means to overshare in a connected world."
    },
    {
        title: "Embracing the Unknown",
        content: "Hey there. Today, I’m sharing a piece that focuses on finding comfort in uncertainty, as we embrace the unknown with courage."
    },
    {
        title: "Fool's Gold: Echoes of Lost Promises",
        content: "Welcome, fellow creatives! In this poem, I explore broken promises, unrealized dreams, and the lessons they leave behind."
    }
];

// Open Modal Function
function openModal(index) {
    const modal = document.getElementById("poemModal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");

    modalTitle.textContent = poems[index].title;
    modalBody.textContent = poems[index].content;

    modal.style.display = "block";
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById("poemModal");
    modal.style.display = "none";
}

// Close Modal on Outside Click
window.onclick = function (event) {
    const modal = document.getElementById("poemModal");
    if (event.target === modal) {
        closeModal();
    }
}
