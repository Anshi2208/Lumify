let animationId;

function goToDisplay() {
  const text = document.getElementById("textInput").value;
  const textColor = document.getElementById("textColor").value;

  const scrollText = document.getElementById("scrollText");

  // Set text + color
  scrollText.innerText = text;
  scrollText.style.color = textColor;

  // 🔥 FULL SWITCH
  document.getElementById("entryScreen").style.display = "none";
  document.getElementById("displayScreen").style.display = "flex";

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
