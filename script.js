function myFunction(x) {
  x.classList.toggle("change");
}

function myFunction(x) {
  x.classList.toggle("change");
}

console.log("Script is running");

// Attach scroll event listener
document.addEventListener("scroll", function () {
  console.log("Scroll detected!");
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  console.log("Current Scroll Position:", scrollY);

  // Define the header element and its maximum height for scroll interpolation
  const header = document.querySelector(".header-box");
  const maxScroll = 350; // Adjust this value based on your needs

  // Calculate the scroll ratio (0 to 1)
  const scrollRatio = Math.min(scrollY / maxScroll, 1);

  // Define start and end RGBA colors
  const startColor = [34, 36, 2, 0]; // Initial color (transparent)
  const endColor = [34, 36, 2, 1]; // Final color (solid)

  // Interpolate colors based on the scroll ratio
  const interpolatedColor = startColor.map((start, index) =>
    index === 3 // Interpolate alpha (opacity)
      ? start + (endColor[index] - start) * scrollRatio
      : Math.round(start + (endColor[index] - start) * scrollRatio)
  );

  // Apply the interpolated color to the header background
  header.style.backgroundColor = `rgba(${interpolatedColor
    .slice(0, 3)
    .join(",")}, ${interpolatedColor[3]})`;

  console.log(
    "Header background color:",
    `rgba(${interpolatedColor.slice(0, 3).join(",")}, ${interpolatedColor[3]})`
  );
});

// --------------------------------------------------------------------------------------------------------------------------
// Wait until the DOM is fully loaded
window.onload = function () {
  // Check if the page is loaded with a hash in the URL
  if (window.location.hash === "#div2") {
    // Remove the hash from the URL without reloading the page
    history.replaceState(null, null, window.location.pathname);
  }

  // Scroll to div1 when the page loads
  document.getElementById("div1").scrollIntoView({ behavior: "smooth" });
};

// Scroll to div2 when the anchor link is clicked
document
  .querySelector('a[href="#div2"]')
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor link behavior
    document.getElementById("div2").scrollIntoView({ behavior: "smooth" }); // Scroll to div2 smoothly
  });

function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("fullscreen-menu").classList.toggle("show");
}



const overlayMenu = document.getElementById("fullscreen-menu");
const overlayItems = document.getElementById("overlay-menu-items");

let targetX = 0;
let currentX = 0;
let animationFrameId;

function animate() {
  // Gradually move currentX toward targetX
  currentX += (targetX - currentX) * 0.08; // 0.08 = smoothing factor
  overlayItems.style.transform = `translateX(${currentX}px)`;
  animationFrameId = requestAnimationFrame(animate);
}

overlayMenu.addEventListener("mousemove", (e) => {
  const screenWidth = window.innerWidth;
  const mouseX = e.clientX;
  const percent = mouseX / screenWidth;

  const itemsWidth = overlayItems.scrollWidth;
  const visibleWidth = overlayMenu.offsetWidth;
  const maxTranslate = itemsWidth - visibleWidth;

  targetX = -percent * maxTranslate;

  if (!animationFrameId) animate(); // Start animation loop if not running
});

overlayMenu.addEventListener("mouseleave", () => {
  targetX = 0; // Reset to center
});





