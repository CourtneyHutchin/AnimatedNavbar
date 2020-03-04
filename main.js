const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
    "linear-gradient(to right top, #00b09b, #96c93d)",
    "linear-gradient(to right top, #fc4a1a, #f7b733)",
    "linear-gradient(to right top, #36D1DC, #5B86E5)"
];

const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect(); // get the height, width, top, left
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting) { // set the bubble to be the same size as the text
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);

            bubble.style.background = gradients[gradientIndex]; // change the gradient to match the section

        }
    });
}

sections.forEach(section => {
    observer.observe(section);
})