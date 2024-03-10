document.addEventListener('DOMContentLoaded', function() {
  const bg = document.querySelector('#bg');
  const radius = 50; // Adjust the radius as needed
  
  function updateBackground(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the range of pixels to be affected
    const startX = Math.max(0, mouseX - radius);
    const startY = Math.max(0, mouseY - radius);
    const endX = Math.min(window.innerWidth, mouseX + radius);
    const endY = Math.min(window.innerHeight, mouseY + radius);

    // Apply transformation to the background pixels within the specified radius
    bg.style.backgroundPosition = `-${startX}px -${startY}px`;
  }

  document.addEventListener('mousemove', updateBackground);
});
