let animationId;

function goToDisplay() {
  const text = document.getElementById("textInput").value;
  const textColor = document.getElementById("textColor").value;

  const scrollText = document.getElementById("scrollText");

  // Apply text + color
  scrollText.innerText = text;
  scrollText.style.color = textColor;

  // Switch screens
  document.getElementById("entryScreen").classList.add("hidden");
  document.getElementById("displayScreen").classList.remove("hidden");

  startScrolling();
}

function goBack() {
  // Stop animation
  cancelAnimationFrame(animationId);

  // Switch back
  document.getElementById("displayScreen").classList.add("hidden");
  document.getElementById("entryScreen").classList.remove("hidden");
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
