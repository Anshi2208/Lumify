let animationId;

function startDisplay() {
  const text = document.getElementById("textInput").value;
  const scrollText = document.getElementById("scrollText");

  const textColor = document.getElementById("textColor").value;
  const bgColor = document.getElementById("bgColor").value;
  const speed = document.getElementById("speed").value;

  document.body.style.backgroundColor = bgColor;
  scrollText.style.color = textColor;

  scrollText.innerText = text;

  let position = window.innerWidth;

  function animate() {
    position -= speed / 2;
    if (position < -scrollText.offsetWidth) {
      position = window.innerWidth;
    }

    scrollText.style.transform = `translateX(${position}px)`;

    animationId = requestAnimationFrame(animate);
  }

  if (animationId) cancelAnimationFrame(animationId);
  animate();
}
