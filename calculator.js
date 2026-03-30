// calculator programe
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = "";
}




window.addEventListener('load', () => {
  const fonts = [
    Impact
  ];

  document.querySelectorAll('*').forEach(el => {
    // Skip scripts & style tags
    if (['SCRIPT','STYLE'].includes(el.tagName)) return;

    // Random font
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    el.style.fontFamily = randomFont;

    // Random color
    el.style.color = `hsl(${Math.random() * 360}, 90%, 60%)`;

    // Optional: random background tint for extreme chaos
    if (Math.random() > 0.85) {
      el.style.backgroundColor = `hsla(${Math.random() * 360}, 80%, 90%, 0.4)`;
    }

    // Random size wiggle
    el.style.fontSize = (Math.random() * 0.8 + 0.6) + 'em';
  });

  console.log("🌈 Font chaos engine activated!");
});

