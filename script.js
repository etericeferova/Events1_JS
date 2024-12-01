const lights = document.querySelectorAll(".light");
let currentLight = 0;

function updateTrafficLight() {
  lights.forEach((light, index) => {
    light.classList.toggle("active", index === currentLight);
  });
}

function nextLight() {
  currentLight = (currentLight + 1) % lights.length;
  updateTrafficLight();
}

updateTrafficLight();
