document.addEventListener('DOMContentLoaded', function() {
  const circle = document.getElementById('circle');

  document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Move the circle with the mouse cursor
    circle.style.left = mouseX - circle.offsetWidth / 2 + 'px';
    circle.style.top = mouseY - circle.offsetHeight / 2 + 'px';
  });
});
