document.addEventListener('DOMContentLoaded', function() {
  const circle = document.getElementById('circle');

  document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Update the position of the circle
    circle.setAttribute('cx', mouseX);
    circle.setAttribute('cy', mouseY);
  });
});
