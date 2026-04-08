let animationId;

function goToDisplay() {
  const text = document.getElementById("textInput").value;
  const textColor = document.getElementById("textColor").value;

  const scrollText = document.getElementById("scrollText");

  scrollText.innerText = text;
  scrollText.style.color = textColor;

  // 🔥 hide entry, show display
  document.getElementById("entryScreen").style.display = "none";
  document.getElementById("displayScreen").style.display = "flex";

  startScrolling();
}

function goBack() {
  cancelAnimationFrame(animationId);

  document.getElementById("displayScreen").style.display = "none";
  document.getElementById("entryScreen").style.display = "flex";
}

function startScrolling() {
  const scrollText = document.getElementById("scrollText");

  let position = window.innerWidth;

  function animate() {
    position -= 2; // fixed speed

    if (position < -scrollText.offsetWidth) {
      position = window.innerWidth;
    }

    scrollText.style.transform = `translateX(${position}px)`;

    animationId = requestAnimationFrame(animate);
  }

  if (animationId) cancelAnimationFrame(animationId);
  animate();
}
