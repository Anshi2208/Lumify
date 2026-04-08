# 📱 Lumify — Scrolling Text Display App

Lumify is a lightweight web-based app that displays customizable scrolling text in a fullscreen, teleprompter-style interface. It is designed for presentations, events, notifications, or creative displays where continuous scrolling text is needed.

🌐 Live Demo: https://anshi2208.github.io/Lumify/

---

## ✨ Features

- 🖥️ Fullscreen immersive display  
- 🔤 Custom user input text  
- 🎨 Adjustable text color  
- 🔁 Continuous infinite vertical scrolling  
- 📦 Seamless repeated text blocks (no gaps)  
- 📱 Mobile-friendly responsive design  
- ⚡ Smooth animation using `requestAnimationFrame`  
- 🔄 Screen switching between input and display modes  

---

## 🚀 How It Works

1. Enter your desired text in the input box  
2. Choose a text color  
3. Click **Next**  
4. The app will:
   - Switch to fullscreen mode (if supported)
   - Transition to the display screen
   - Start vertical scrolling automatically  
5. The text is duplicated into multiple stacked blocks to create a seamless infinite scrolling loop  

---

## 📱 Usage

👉 No installation required  
👉 Just open the app in your browser:

https://anshi2208.github.io/lumify/

---

## 🔁 Scrolling Mechanism

- The text is rendered in multiple repeated blocks  
- These blocks are stacked vertically  
- The entire stack scrolls upward continuously  
- As one block leaves the screen, another is already entering  
- This creates a smooth, infinite, gap-free scrolling effect  

---

## 🎨 Customization

You can modify the following in the code:

### Scroll speed
```javascript
position -= 2;
