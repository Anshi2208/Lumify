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

let position = window.innerHeight;

function startScrolling() {
  const text = document.getElementById("scrollText");

  position = window.innerHeight;

  function animate() {
    position -= 2; // speed (adjust as needed)

    text.style.transform = `translateY(${position}px)`;

    animationId = requestAnimationFrame(animate);
  }

  animate();
}
