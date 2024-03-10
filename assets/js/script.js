document.addEventListener('mousemove', function(event) {
  const circle = document.getElementById('circle');
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  circle.setAttribute('cx', mouseX);
  circle.setAttribute('cy', mouseY);
});
