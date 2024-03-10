document.addEventListener('DOMContentLoaded', function() {
    const background = document.querySelector('.background');
  
    function moveCircle(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.style.left = mouseX + 'px';
      circle.style.top = mouseY + 'px';
      const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      circle.style.backgroundColor = color;
      background.appendChild(circle);
      setTimeout(() => {
        circle.remove();
      }, 2000); // Adjust the time the circles persist on the screen
    }
  
    document.addEventListener('mousemove', moveCircle);
  });
  