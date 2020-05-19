const testimonies = Array.from($('.testimony'));
const lastSlideIndex = testimonies.length - 1;
let currentSlideIndex = 0;

carousel();
window.setTimeout(autoCarousel, 7000);

function carousel() {

    // grab previous and next arrows
    let prev = $('#prev')[0];
    let next = $('#next')[0];

    // previous arrow
    prev.addEventListener("click", () => {
        testimonies[currentSlideIndex].style.display = "none";

        // go to last testimony if current is first
        if (currentSlideIndex - 1 < 0) {
            currentSlideIndex = lastSlideIndex;
        } else {
            currentSlideIndex -= 1;
        }
        testimonies[currentSlideIndex].style.display = "block";

    });

    // next arrow
    next.addEventListener("click", () => {
        testimonies[currentSlideIndex].style.display = "none";

        // go to first testimony if current is last
        if (currentSlideIndex + 1 > lastSlideIndex) {
            currentSlideIndex = 0;
        } else {
            currentSlideIndex += 1;
        }
        testimonies[currentSlideIndex].style.display = "block";

    });

    // create the dots
    let carouselContainer = $('.carousel-container')[0];
    for (let i = 0; i <= lastSlideIndex; i++) {
        let newDot = document.createElement("span");
        newDot.className += "dot";
        carouselContainer.appendChild(newDot);
    }

    // grab the dots
    let dots = Array.from($('.dot'));

    // add dot functionality
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            testimonies[currentSlideIndex].style.display = "none";
            currentSlideIndex = dots.indexOf(dot);
            testimonies[currentSlideIndex].style.display = "block";
        });
    });

}

function autoCarousel() {
    testimonies[currentSlideIndex].style.display = "none";
    currentSlideIndex++;
    if (currentSlideIndex > lastSlideIndex) {
        currentSlideIndex = 0;
    }
    testimonies[currentSlideIndex].style.display = "block";
    window.setTimeout(autoCarousel, 7000);
}