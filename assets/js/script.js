document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body'); // Get the body element
  const circle = document.createElement('div');
  circle.classList.add('circle');
  body.appendChild(circle); // Append the circle to the body

  function moveCircle(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    circle.style.left = mouseX - circle.offsetWidth / 2 + 'px'; // Center the circle horizontally
    circle.style.top = mouseY - circle.offsetHeight / 2 + 'px'; // Center the circle vertically
  }

  document.addEventListener('mousemove', moveCircle);
});
