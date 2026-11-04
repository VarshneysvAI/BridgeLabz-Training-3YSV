// Q7: Convert viewport coordinates to coordinates relative to the box.
const coordinateBox = document.querySelector("#coordinate-box");
const mouseCoordinates = document.querySelector("#mouse-coordinates");

coordinateBox.addEventListener("mousemove", (event) => {
  mouseCoordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

coordinateBox.addEventListener("dblclick", (event) => {
  const boxRectangle = coordinateBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "click-dot";
  dot.style.left = `${event.clientX - boxRectangle.left}px`;
  dot.style.top = `${event.clientY - boxRectangle.top}px`;
  coordinateBox.appendChild(dot);
});
