
document.addEventListener('DOMContentLoaded', function() {
  const circle = document.getElementById('circle');

  document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Move the circle to the mouse cursor
    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
    circle.style.display = 'block'; // Show the circle
  });

  document.addEventListener('mouseleave', function() {
    // Hide the circle when the mouse leaves the document
    circle.style.display = 'none';
  });
});
