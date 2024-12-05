const field = document.getElementById("field");
const ball = document.getElementById("ball");

field.addEventListener("click", (event) => {
  const fieldRect = field.getBoundingClientRect();

  const clickX = event.clientX - fieldRect.left;
  const clickY = event.clientY - fieldRect.top;

  ball.style.position = "absolute";
  ball.style.left = `${clickX - ball.offsetWidth / 2}px`;
  ball.style.top = `${clickY - ball.offsetHeight / 2}px`;
});
