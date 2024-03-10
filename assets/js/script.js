document.addEventListener('DOMContentLoaded', function() {
  const bg = document.querySelector('#bg');
  const circle = document.querySelector('#circle');

  function updateBackground(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate gradient colors based on mouse position
    const color1 = `rgb(${mouseX / window.innerWidth * 255}, ${mouseY / window.innerHeight * 255}, 200)`;
    const color2 = `rgb(255, ${255 - mouseX / window.innerWidth * 255}, ${255 - mouseY / window.innerHeight * 255})`;

    // Apply gradient background to bg element
    bg.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;

    // Position the circle around the cursor
    const circleRadius = 50; // Adjust the radius of the circle
    circle.style.left = mouseX - circleRadius + 'px';
    circle.style.top = mouseY - circleRadius + 'px';
  }

  document.addEventListener('mousemove', updateBackground);
});
