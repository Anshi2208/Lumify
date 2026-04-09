let animationId;

function goToDisplay() {
  // 🔥 request fullscreen (must be inside user action)
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }

  const text = document.getElementById("textInput").value;
  const textColor = document.getElementById("textColor").value;

  const scrollText = document.getElementById("scrollText");

  scrollText.innerText = text;
  scrollText.style.color = textColor;

  document.getElementById("entryScreen").style.display = "none";
  document.getElementById("displayScreen").style.display = "flex";

  startScrolling();
}

function goBack() {
  cancelAnimationFrame(animationId);

  document.getElementById("displayScreen").style.display = "none";
  document.getElementById("entryScreen").style.display = "flex";
}

let position;

function startScrolling() {
  const text = document.getElementById("scrollText");

  // Start from right side of screen
  position = window.innerWidth;

  function animate() {
    position -= 2; // speed

    text.style.transform = `translateX(${position}px)`;

    // 🔁 Reset when text fully leaves screen
    if (position < -text.offsetWidth) {
      position = window.innerWidth;
    }

    animationId = requestAnimationFrame(animate);
  }

  animate();
}
