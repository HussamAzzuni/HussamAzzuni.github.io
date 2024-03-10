document.addEventListener('DOMContentLoaded', function() {
  const bg = document.querySelector('#bg');

  function updateBackground(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate gradient colors based on mouse position
    const color1 = `rgb(${mouseX / window.innerWidth * 255}, ${mouseY / window.innerHeight * 255}, 200)`;
    const color2 = `rgb(255, ${255 - mouseX / window.innerWidth * 255}, ${255 - mouseY / window.innerHeight * 255})`;

    // Apply gradient background to bg element
    bg.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
  }

  document.addEventListener('mousemove', updateBackground);
});
