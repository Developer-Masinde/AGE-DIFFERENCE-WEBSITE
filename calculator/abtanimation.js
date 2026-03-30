// rainbow cursor

const colors = ["chocolate", "saddlebrown", "gray", "black", "white",  ];

let dots = [];

// Create dots
for (let i = 0; i < 20; i++) {
  let dot = document.createElement("div");
  dot.classList.add("cursor-dot");
  dot.style.backgroundColor = colors[i % colors.length];
  document.body.appendChild(dot);
  dots.push(dot);
}

let mouse = { x: 0, y: 0 };

// Track mouse movement
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

let positions = Array(dots.length).fill({ x: 0, y: 0 });

// Animate trail
function animate() {
  positions[0] = { x: mouse.x, y: mouse.y };

  for (let i = 1; i < positions.length; i++) {
    positions[i] = {
      x: positions[i].x + (positions[i - 1].x - positions[i].x) * 0.2,
      y: positions[i].y + (positions[i - 1].y - positions[i].y) * 0.2,
    };
  }

  dots.forEach((dot, i) => {
    dot.style.left = positions[i].x + "px";
    dot.style.top = positions[i].y + "px";
  });

  requestAnimationFrame(animate);
}

animate();
